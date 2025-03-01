import {Referee_Command, Referee_Stage} from "@/proto/ssl_gc_referee_message_pb";
import {TeamJson} from "@/proto/ssl_gc_common_pb";
import {GameEventJson} from "@/proto/ssl_gc_game_event_pb";

const stageToText = new Map();
stageToText.set(Referee_Stage.NORMAL_FIRST_HALF_PRE, 'Match to be started');
stageToText.set(Referee_Stage.NORMAL_FIRST_HALF, '1st Half');
stageToText.set(Referee_Stage.NORMAL_HALF_TIME, 'Half Time');
stageToText.set(Referee_Stage.NORMAL_SECOND_HALF_PRE, '2nd Half');
stageToText.set(Referee_Stage.NORMAL_SECOND_HALF, '2nd Half');
stageToText.set(Referee_Stage.EXTRA_TIME_BREAK, 'Game goes into Overtime');
stageToText.set(Referee_Stage.EXTRA_FIRST_HALF_PRE, '1st Half (Overtime)');
stageToText.set(Referee_Stage.EXTRA_FIRST_HALF, '1st Half (Overtime)');
stageToText.set(Referee_Stage.EXTRA_HALF_TIME, 'Half Time (Overtime)');
stageToText.set(Referee_Stage.EXTRA_SECOND_HALF_PRE, '2nd Half (Overtime)');
stageToText.set(Referee_Stage.EXTRA_SECOND_HALF, '2nd Half (Overtime)');
stageToText.set(Referee_Stage.PENALTY_SHOOTOUT_BREAK, 'Prepare for Penalty Shootout');
stageToText.set(Referee_Stage.PENALTY_SHOOTOUT, 'Penalty Shootout');
stageToText.set(Referee_Stage.POST_GAME, 'Match finished');

export const mapStageToText = (stage: Referee_Stage) => {
    const text = stageToText.get(stage);
    if (text !== undefined) {
        return text;
    }
    return 'unknown stage: ' + stage;
};


const commandToText = new Map();
commandToText.set(Referee_Command.HALT, 'Game is Halted');
commandToText.set(Referee_Command.STOP, 'Game is Stopped');
commandToText.set(Referee_Command.NORMAL_START, 'Game is Running');
commandToText.set(Referee_Command.FORCE_START, 'Game is Running');
commandToText.set(Referee_Command.PREPARE_KICKOFF_YELLOW, 'Kickoff');
commandToText.set(Referee_Command.PREPARE_KICKOFF_BLUE, 'Kickoff');
commandToText.set(Referee_Command.PREPARE_PENALTY_YELLOW, 'Penalty Kick');
commandToText.set(Referee_Command.PREPARE_PENALTY_BLUE, 'Penalty Kick');
commandToText.set(Referee_Command.DIRECT_FREE_YELLOW, 'Game is Running');
commandToText.set(Referee_Command.DIRECT_FREE_BLUE, 'Game is Running');
commandToText.set(Referee_Command.TIMEOUT_YELLOW, 'Timeout');
commandToText.set(Referee_Command.TIMEOUT_BLUE, 'Timeout');
commandToText.set(Referee_Command.BALL_PLACEMENT_YELLOW, 'Ball Placement');
commandToText.set(Referee_Command.BALL_PLACEMENT_BLUE, 'Ball Placement');

export const mapCommandToText = (command: Referee_Command) => {
    const text = commandToText.get(command);
    if (text !== undefined) {
        return text;
    }
    return 'unknown command: ' + command;
};


const oppositeTeam = (team: TeamJson): TeamJson => {
    if (team === 'BLUE') {
        return 'YELLOW';
    } else if (team === 'YELLOW') {
        return 'BLUE';
    }
    return 'UNKNOWN';
};

const formatTeam = (team: TeamJson) => {
    if (team === 'BLUE') {
        return '<span class="team-blue">Blue</span>';
    } else if (team === 'YELLOW') {
        return '<span class="team-yellow">Yellow</span>';
    }
    return 'Unknown;';
};

const gameEventForTeam = (gameEvent: GameEventJson): TeamJson => {
    for (const value of Object.values(gameEvent)) {
        if (typeof value === 'object') {
            const attr = value as { [key: string]: any }
            for (const key of Object.keys(attr)) {
                if (key === 'byTeam') {
                    return attr['byTeam'] as TeamJson
                }
            }
        }
    }
    return 'UNKNOWN' as TeamJson
};

const gameEventByBot = (gameEvent: GameEventJson): number | undefined => {
    for (const value of Object.values(gameEvent)) {
        if (typeof value === 'object') {
            const attr = value as { [key: string]: any }
            for (const key of Object.keys(attr)) {
                if (key === 'byBot') {
                    return attr['byBot'] as number
                }
            }
        }
    }
    return undefined
};

const teamAndBot = (event: GameEventJson) => {
    const byTeam = gameEventForTeam(event)
    if (byTeam === "UNKNOWN") {
        return '';
    }
    const byBot = gameEventByBot(event)
    if (byBot === undefined) {
        return formatTeam(byTeam);
    }
    return formatTeam(byTeam) + ' ' + byBot;
};

const radToDeg = (rad: number) => Math.ceil(rad * 180 / Math.PI) + '°';

const velocity = (v: number) => Number(Math.ceil(v * 10) / 10).toFixed(1) + 'm/s';

const distance = (v: number) => Number(Math.ceil(v * 100) / 100).toFixed(2) + 'm';

const seconds = (v: number | "NaN" | "Infinity" | "-Infinity") => {
    if (v === "NaN" || v === "Infinity" || v === "-Infinity") {
        return v;
    }
    return Number(Math.ceil(v * 10) / 10).toFixed(1) + 's';
}

export const mapGameEventToText = (event: GameEventJson): string => {
    if (event.noProgressInGame != null) {
        if (event.noProgressInGame.time) {
            return `No progress for ${seconds(event.noProgressInGame.time)}`;
        } else {
            return `No progress`;
        }
    }
    if (event.placementFailed != null) {
        if (event.placementFailed.nearestOwnBotDistance != null) {
            return `${teamAndBot(event)} failed placing ball `
                + ` (${distance(event.placementFailed.remainingDistance)} remaining, `
                + `nearest own bot at ${distance(event.placementFailed.nearestOwnBotDistance)})`;
        }
        return `${teamAndBot(event.placementFailed)} failed placing ball `
            + ` (${distance(event.placementFailed.remainingDistance)} remaining)`;
    }
    if (event.placementSucceeded != null) {
        return `${teamAndBot(event.placementSucceeded)} placed ball successfully `
            + `over ${distance(event.placementSucceeded.distance)} `
            + `within ${seconds(event.placementSucceeded.timeTaken)} `
            + `and ${distance(event.placementSucceeded.precision)}`;
    }
    if (event.botSubstitution != null) {
        return `Team ${teamAndBot(event.botSubstitution)} substitutes robots`;
    }
    if (event.excessiveBotSubstitution != null) {
        return `Team ${teamAndBot(event.excessiveBotSubstitution)} excessively substituted robots`;
    }
    if (event.tooManyRobots != null) {
        return `${teamAndBot(event.tooManyRobots)} has ${event.tooManyRobots.numRobotsOnField} robots on the field, `
            + `but only ${event.tooManyRobots.numRobotsAllowed} are allowed`;
    }
    if (event.ballLeftFieldTouchLine != null) {
        return `${teamAndBot(event.ballLeftFieldTouchLine)} kicked ball out via touch line`;
    }
    if (event.ballLeftFieldGoalLine != null) {
        return `${teamAndBot(event.ballLeftFieldGoalLine)} kicked ball out via goal line`;
    }
    if (event.possibleGoal != null) {
        return `${teamAndBot(event.possibleGoal)} might have scored a goal`;
    }
    if (event.goal != null) {
        return `${teamAndBot(event.goal)} has scored a goal`;
    }
    if (event.invalidGoal != null) {
        return `Scored goal by ${teamAndBot(event.invalidGoal)} is invalid: ${event.invalidGoal.message}`;
    }
    if (event.aimlessKick != null) {
        return `${teamAndBot(event.aimlessKick)} kicked aimlessly`;
    }
    if (event.keeperHeldBall != null) {
        return `${teamAndBot(event.keeperHeldBall)}'s keeper `
            + `held the ball for ${seconds(event.keeperHeldBall.duration)}`;
    }
    if (event.attackerDoubleTouchedBall != null) {
        return `${teamAndBot(event.attackerDoubleTouchedBall)} touched ball twice`;
    }
    if (event.attackerTouchedBallInDefenseArea != null) {
        return `${teamAndBot(event.attackerTouchedBallInDefenseArea)} touched ball in opponent defense area`;
    }
    if (event.botDribbledBallTooFar != null) {
        return `${teamAndBot(event.botDribbledBallTooFar)} dribbled ball too far`;
    }
    if (event.botKickedBallTooFast != null) {
        return `${teamAndBot(event.botKickedBallTooFast)} kicked ball too fast` +
            `(${velocity(event.botKickedBallTooFast.initialBallSpeed)})`;
    }
    if (event.attackerTooCloseToDefenseArea != null) {
        return `${teamAndBot(event.attackerTooCloseToDefenseArea)} too close to opponent defense area `
            + `(${distance(event.attackerTooCloseToDefenseArea.distance)})`;
    }
    if (event.botInterferedPlacement != null) {
        return `${teamAndBot(event.botInterferedPlacement)} interfered placement`;
    }
    if (event.botCrashDrawn != null) {
        let crashSpeed = event.botCrashDrawn.crashSpeed;
        let crashAngle = event.botCrashDrawn.crashAngle;
        let speedDiff = event.botCrashDrawn.speedDiff;
        let text = `Bot Blue ${event.botCrashDrawn.botBlue} and Yellow ${event.botCrashDrawn.botYellow} crashed`;
        if (crashSpeed > 0) {
            text += ` with ${velocity(crashSpeed)}`
        }
        if (crashAngle > 0) {
            text += ` @ ${radToDeg(crashAngle)}`
        }
        if (speedDiff > 0) {
            text += ` (Δ ${velocity(speedDiff)})`
        }
        return text;
    }
    if (event.botCrashUnique != null) {
        let byTeam = event.botCrashUnique.byTeam;
        let otherTeam = oppositeTeam(byTeam);
        let violator = event.botCrashUnique.violator;
        let victim = event.botCrashUnique.victim;
        let crashSpeed = event.botCrashUnique.crashSpeed;
        let crashAngle = event.botCrashUnique.crashAngle;
        let speedDiff = event.botCrashUnique.speedDiff;
        let text = `${formatTeam(byTeam)} ${violator}`
            + ` crashed into ${formatTeam(otherTeam)} ${victim}`;
        if (crashSpeed > 0) {
            text += ` with ${velocity(crashSpeed)}`
        }
        if (crashAngle > 0) {
            text += ` @ ${radToDeg(crashAngle)}`
        }
        if (speedDiff > 0) {
            text += ` (Δ ${velocity(speedDiff)})`
        }
        return text;
    }
    if (event.botPushedBot != null) {
        let byTeam = event.botPushedBot.byTeam;
        let otherTeam = oppositeTeam(byTeam);
        let violator = event.botPushedBot.violator;
        let victim = event.botPushedBot.victim;
        let dist = event.botPushedBot.pushedDistance;
        let text = `${formatTeam(byTeam)} ${violator}`
            + ` pushed ${formatTeam(otherTeam)} ${victim}`;
        if (dist > 0) {
            text += ` over ${distance(dist)}`
        }
        return text;
    }
    if (event.botHeldBallDeliberately != null) {
        return `${teamAndBot(event.botHeldBallDeliberately)} `
            + `held ball deliberately for ${event.botHeldBallDeliberately.duration}`;
    }
    if (event.botTippedOver != null) {
        return `${teamAndBot(event.botTippedOver)} tipped over`;
    }
    if (event.botDroppedParts != null) {
        return `${teamAndBot(event.botDroppedParts)} dropped parts`;
    }
    if (event.botTooFastInStop != null) {
        return `${teamAndBot(event.botTooFastInStop)} `
            + `too fast during stop (${velocity(event.botTooFastInStop.speed)})`;
    }
    if (event.defenderTooCloseToKickPoint != null) {
        return `${teamAndBot(event.defenderTooCloseToKickPoint)} `
            + `too close to kick point (${distance(event.defenderTooCloseToKickPoint.distance)})`;
    }
    if (event.defenderInDefenseArea != null) {
        return `${teamAndBot(event.defenderInDefenseArea)} `
            + `touched ball while fully inside own defense area `
            + `(${distance(event.defenderInDefenseArea.distance)})`;
    }
    if (event.multipleCards != null) {
        return `${teamAndBot(event.multipleCards)} collected multiple cards`;
    }
    if (event.multipleFouls != null) {
        return `${teamAndBot(event.multipleFouls)} collected multiple fouls: ` +
            event.multipleFouls.causedGameEvents.map((cause: GameEventJson) => mapGameEventToText(cause)).join(", ");
    }
    if (event.unsportingBehaviorMinor != null) {
        return `Unsporting behavior by ${teamAndBot(event.unsportingBehaviorMinor)}: `
            + event.unsportingBehaviorMinor.reason;
    }
    if (event.unsportingBehaviorMajor != null) {
        return `Major unsporting behavior by ${teamAndBot(event.unsportingBehaviorMajor)}: `
            + event.unsportingBehaviorMajor.reason;
    }
    if (event.boundaryCrossing != null) {
        return `${teamAndBot(event.boundaryCrossing)} kicked the ball over the field boundary`;
    }
    if (event.penaltyKickFailed != null) {
        const reason = event.penaltyKickFailed.reason != null ? ": " + event.penaltyKickFailed.reason : "";
        return `Penalty kick failed by ${teamAndBot(event.penaltyKickFailed)}${reason}`;
    }
    if (event.challengeFlag != null) {
        return `${teamAndBot(event.challengeFlag)} raised a challenge flag`;
    }
    if (event.challengeFlagHandled != null) {
        if (event.challengeFlagHandled.accepted) {
            return `Challenge from ${teamAndBot(event.challengeFlagHandled)} accepted`;
        }
        return `Challenge from ${teamAndBot(event.challengeFlagHandled)} rejected`;
    }
    if (event.emergencyStop != null) {
        return `Emergency stop for ${teamAndBot(event.emergencyStop)} executed`;
    }
    return 'unknown game event';
};

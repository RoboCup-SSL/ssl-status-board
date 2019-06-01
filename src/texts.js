import {Referee} from "./sslProto"

const stageToText = new Map();
stageToText.set(Referee.Stage.NORMAL_FIRST_HALF_PRE, 'Matched to be started');
stageToText.set(Referee.Stage.NORMAL_FIRST_HALF, 'First Half');
stageToText.set(Referee.Stage.NORMAL_HALF_TIME, 'Half Time');
stageToText.set(Referee.Stage.NORMAL_SECOND_HALF_PRE, 'Second Half');
stageToText.set(Referee.Stage.NORMAL_SECOND_HALF, 'Second Half');
stageToText.set(Referee.Stage.EXTRA_TIME_BREAK, 'Break');
stageToText.set(Referee.Stage.EXTRA_FIRST_HALF_PRE, 'Extra First Time');
stageToText.set(Referee.Stage.EXTRA_FIRST_HALF, 'Extra First Time');
stageToText.set(Referee.Stage.EXTRA_HALF_TIME, 'Extra Half Time');
stageToText.set(Referee.Stage.EXTRA_SECOND_HALF_PRE, 'Extra Second Half');
stageToText.set(Referee.Stage.EXTRA_SECOND_HALF, 'Extra Second Half');
stageToText.set(Referee.Stage.PENALTY_SHOOTOUT_BREAK, 'Break');
stageToText.set(Referee.Stage.PENALTY_SHOOTOUT, 'Shootout');
stageToText.set(Referee.Stage.POST_GAME, 'Match finished');

export const mapStageToText = function (stage) {
    const text = stageToText.get(stage);
    if (text !== undefined) {
        return text;
    }
    return 'unknown stage: ' + stage;
};


const commandToText = new Map();
commandToText.set(Referee.Command.HALT, 'Game is Halted');
commandToText.set(Referee.Command.STOP, 'Game is Stopped');
commandToText.set(Referee.Command.NORMAL_START, 'Game is Running');
commandToText.set(Referee.Command.FORCE_START, 'Game is Running');
commandToText.set(Referee.Command.PREPARE_KICKOFF_YELLOW, 'Kickoff');
commandToText.set(Referee.Command.PREPARE_KICKOFF_BLUE, 'Kickoff');
commandToText.set(Referee.Command.PREPARE_PENALTY_YELLOW, 'Penalty Kick');
commandToText.set(Referee.Command.PREPARE_PENALTY_BLUE, 'Penalty Kick');
commandToText.set(Referee.Command.DIRECT_FREE_YELLOW, 'Game is Running');
commandToText.set(Referee.Command.DIRECT_FREE_BLUE, 'Game is Running');
commandToText.set(Referee.Command.INDIRECT_FREE_YELLOW, 'Game is Running');
commandToText.set(Referee.Command.INDIRECT_FREE_BLUE, 'Game is Running');
commandToText.set(Referee.Command.TIMEOUT_YELLOW, 'Timeout');
commandToText.set(Referee.Command.TIMEOUT_BLUE, 'Timeout');
commandToText.set(Referee.Command.GOAL_YELLOW, 'Goal');
commandToText.set(Referee.Command.GOAL_BLUE, 'Goal');
commandToText.set(Referee.Command.BALL_PLACEMENT_YELLOW, 'Ball Placement');
commandToText.set(Referee.Command.BALL_PLACEMENT_BLUE, 'Ball Placement');

export const mapCommandToText = function (command) {
    const text = commandToText.get(command);
    if (text !== undefined) {
        return text;
    }
    return 'unknown command: ' + command;
};

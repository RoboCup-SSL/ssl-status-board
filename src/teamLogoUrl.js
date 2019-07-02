const knownLogos = new Map([
    ['ais', require('@/assets/logos/ais.png')],
    ['blue', require('@/assets/logos/blue.png')],
    ['mrl', require('@/assets/logos/MRL.png')],
    ['cmμs', require('@/assets/logos/cmμs.png')],
    ['er-force', require('@/assets/logos/er-force.png')],
    ['immortals', require('@/assets/logos/immortals.png')],
    ['kiks', require('@/assets/logos/kiks.png')],
    ['mct-susano-logics', require('@/assets/logos/mct-susano-logics.png')],
    ['namec', require('@/assets/logos/namec.png')],
    ['neuislanders', require('@/assets/logos/neuislanders.png')],
    ['op-amp', require('@/assets/logos/op-amp.png')],
    ['robôcin', require('@/assets/logos/robocin.png')],
    ['robodragons', require('@/assets/logos/robodragons.png')],
    ['robofei', require('@/assets/logos/robofei.png')],
    ['roboime', require('@/assets/logos/roboime.png')],
    ['robojackets', require('@/assets/logos/robojackets.png')],
    ['roboteam-twente', require('@/assets/logos/roboteam-twente.png')],
    ['tigers-mannheim', require('@/assets/logos/tigers-mannheim.png')],
    ['ubc-thunderbots', require('@/assets/logos/ubc-thunderbots.png')],
    ['ultron', require('@/assets/logos/ultron.png')],
    ['umass-minutebots', require('@/assets/logos/umass-minutebots.png')],
    ['yellow', require('@/assets/logos/yellow.png')],
    ['zjunlict', require('@/assets/logos/zjunlict.png')],
]);

import defaultLogo from '@/assets/logos/no-logo.png';

const teamLogoUrl = function (teamName) {
    const logoBaseName = teamName.toLowerCase().replace(' ', '-');
    const logoPath = knownLogos.get(logoBaseName);
    if (logoPath !== undefined) {
        return logoPath;
    }
    return defaultLogo;
};

export default teamLogoUrl;

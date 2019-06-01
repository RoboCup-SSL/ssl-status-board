const knownLogos = new Map([
    ['yellow', require('@/assets/logos/yellow.png')],
    ['blue', require('@/assets/logos/blue.png')],
    ['ais', require('@/assets/logos/ais.png')],
    ['cmμs', require('@/assets/logos/cmμs.png')],
    ['er-force', require('@/assets/logos/er-force.png')],
    ['immortals', require('@/assets/logos/immortals.png')],
    ['kiks', require('@/assets/logos/kiks.png')],
    ['neuislanders', require('@/assets/logos/neuislanders.png')],
    ['robodragons', require('@/assets/logos/robodragons.png')],
    ['robofei', require('@/assets/logos/robofei.png')],
    ['roboime', require('@/assets/logos/roboime.png')],
    ['robojackets', require('@/assets/logos/robojackets.png')],
    ['roboteam-twente', require('@/assets/logos/roboteam-twente.png')],
    ['tigers-mannheim', require('@/assets/logos/tigers-mannheim.png')],
    ['ubc-thunderbots', require('@/assets/logos/ubc-thunderbots.png')],
    ['umass-minutebots', require('@/assets/logos/umass-minutebots.png')],
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

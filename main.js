var c = (function () {
    var v = !![];
    return function (w, x) {
        var y = v ? function () {
            if (x) {
                var z = x['apply'](w, arguments);
                x = null;
                return z;
            }
        } : function () {
        };
        v = ![];
        return y;
    };
}());
(function () {
    c(this, function () {
        var v = new RegExp('funct' + 'ion\x20*' + '\x5c(\x20*\x5c' + ')');
        var w = new RegExp('\x5c+\x5c+\x20' + '*(?:[' + 'a-zA-' + 'Z_$][' + '0-9a-' + 'zA-Z_' + '$]*)', 'i');
        var x = u('init');
        if (!v['test'](x + 'chain') || !w['test'](x + 'input')) {
            x('0');
        } else {
            u();
        }
    })();
}());
const d = {
    'apiKey': 'AIzaS' + 'yA-eA' + 'VO5sL' + 'KjIdb' + 'aZhkU' + 'KtfHK' + 'epwRz' + 'Ja7s',
    'authDomain': 'mathe' + 'matic' + 'al-so' + 'ciety' + '-6013' + 'a.fir' + 'ebase' + 'app.c' + 'om',
    'projectId': 'mathe' + 'matic' + 'al-so' + 'ciety' + '-6013' + 'a',
    'storageBucket': 'mathe' + 'matic' + 'al-so' + 'ciety' + '-6013' + 'a.app' + 'spot.' + 'com',
    'messagingSenderId': '72398' + '87776' + '05',
    'appId': '1:723' + '98877' + '7605:' + 'web:4' + 'a9800' + '258ef' + '288f0' + 'd537e' + 'c'
};
const e = firebase['initi' + 'alize' + 'App'](d);
const f = e['fires' + 'tore']();
var g = new Timer();
g['stop']();
var h = new Timer();
h['stop']();
document['getEl' + 'ement' + 'ById']('age')['addEv' + 'entLi' + 'stene' + 'r']('chang' + 'e', function () {
    console['log']('Enter' + 'ed\x20da' + 'te:', document['getEl' + 'ement' + 'ById']('age')['value'], moment(document['getEl' + 'ement' + 'ById']('age')['value'])['isAft' + 'er'](moment('2008-' + '1-1')));
    var v = document['getEl' + 'ement' + 'ById']('age')['value'];
    if (moment(v)['isAft' + 'er'](moment('2008-' + '1-1')) && moment(v)['isBef' + 'ore'](moment('2013-' + '1-1'))) {
        console['log']('Valid' + '\x20DOB!');
        parent = document['getEl' + 'ement' + 'ById']('confi' + 'rmati' + 'on-be' + 'gin');
        parent['inner' + 'HTML'] = '';
        beginButton = document['creat' + 'eElem' + 'ent']('butto' + 'n');
        beginButton['inner' + 'HTML'] = 'Begin' + '\x20test' + '\x20with' + '\x20an\x20a' + 'ge\x20of' + '\x20' + moment()['to'](moment(v), !![]);
        beginButton['addEv' + 'entLi' + 'stene' + 'r']('click', function () {
            var w = confirm('Are\x20y' + 'ou\x20su' + 're\x20yo' + 'u\x20wou' + 'ld\x20li' + 'ke\x20to' + '\x20cont' + 'inue\x20' + 'with\x20' + 'this\x20' + 'opera' + 'tion?' + '\x0aAfte' + 'r\x20con' + 'firma' + 'tion,' + '\x20your' + '\x20brow' + 'ser\x20s' + 'creen' + '\x20will' + '\x20go\x20i' + 'nto\x20a' + '\x20full' + 'scree' + 'n\x20win' + 'dow,\x20' + 'and\x20e' + 'xitin' + 'g\x20thi' + 's\x20win' + 'dow\x20w' + 'ill\x20t' + 'ermin' + 'ate\x20t' + 'he\x20te' + 'st.');
            if (w) {
                document['getEl' + 'ement' + 'ById']('descr' + 'iptio' + 'ns')['inner' + 'HTML'] = '';
                k();
                document['getEl' + 'ement' + 'ById']('test')['style']['displ' + 'ay'] = 'block';
                g['start']();
                s();
            }
            return 0x0;
        });
        parent['appen' + 'dChil' + 'd'](beginButton);
    }
});
katex['rende' + 'r'](String['raw']`e = \pm0.00032858`, document['getEl' + 'ement' + 'ById']('moe'), { 'throwOnError': ![] });
function i() {
    if (!document['body']['webki' + 'tIsFu' + 'llScr' + 'een'] && !document['body']['mozFu' + 'llScr' + 'een'] && !document['body']['msFul' + 'lscre' + 'enEle' + 'ment']) {
        console['log']('I\x20wou' + 'ld\x20sa' + 'y\x20you' + '\x20were' + '\x20chea' + 'ting\x20' + 'if\x20th' + 'is\x20wa' + 'sn\x27t\x20' + 'a\x20bug' + 'gy\x20an' + 'tiche' + 'at.');
    }
}
function j(v) {
    var w = v['reque' + 'stFul' + 'lScre' + 'en'] || v['webki' + 'tRequ' + 'estFu' + 'llScr' + 'een'] || v['mozRe' + 'quest' + 'FullS' + 'creen'] || v['msReq' + 'uestF' + 'ullSc' + 'reen'];
    if (w) {
        w['call'](v);
    } else if (typeof window['Activ' + 'eXObj' + 'ect'] !== 'undef' + 'ined') {
        var x = new ActiveXObject('WScri' + 'pt.Sh' + 'ell');
        if (x !== null) {
            x['SendK' + 'eys']('{F11}');
        }
    }
    document['addEv' + 'entLi' + 'stene' + 'r']('fulls' + 'creen' + 'chang' + 'e', i, ![]);
}
testFinished = ![];
function k() {
    document['addEv' + 'entLi' + 'stene' + 'r']('mouse' + 'leave', y => {
        if (y['clien' + 'tY'] <= 0x0 || y['clien' + 'tX'] <= 0x0 || (y['clien' + 'tX'] >= window['inner' + 'Width'] || y['clien' + 'tY'] >= window['inner' + 'Heigh' + 't'])) {
            x(![]);
        }
    });
    j(document['body']);
    var v = !![];
    var w = 0x0;
    function x(y) {
        v = y;
        console['log'](y);
        if (!v && w < 0x2 && !testFinished) {
            w++;
            alert('Pleas' + 'e\x20do\x20' + 'not\x20t' + 'ake\x20y' + 'our\x20m' + 'ouse\x20' + 'out\x20o' + 'f\x20thi' + 's\x20scr' + 'een.\x20' + 'You\x20h' + 'ave\x20b' + 'een\x20g' + 'iven\x20' + 'a\x20war' + 'ning\x20' + '(' + w + '/2)');
        }
    }
}
const l = window['locat' + 'ion']['searc' + 'h'];
const m = new URLSearchParams(l);
f['colle' + 'ction'](m['get']('age_g' + 'roup'));
var n = -0x1;
var o = [
    '<p>Q1' + '.\x20Exp' + 'and\x20(' + 'a+b)^' + '2\x20to\x20' + 'the\x20f' + 'ulles' + 't.\x20(^' + '2\x20is\x20' + 'the\x20e' + 'quiva' + 'lent\x20' + 'of\x20sq' + 'uared' + ',\x20if\x20' + 'your\x20' + 'answe' + 'r\x20was' + '\x20b\x20sq' + 'uared' + '\x20plus' + '\x201,\x20e' + 'nter\x20' + 'it\x20as' + '\x20b^2\x20' + '+\x201).' + '\x20Orde' + 'r\x20you' + 'r\x20exp' + 'ressi' + 'on\x20su' + 'ch\x20th' + 'at\x20it' + '\x20is\x20a' + 'lphab' + 'etica' + 'lly\x20o' + 'rdere' + 'd\x20and' + '\x20all\x20' + 'varia' + 'bles\x20' + 'with\x20' + 'an\x20ex' + 'ponen' + 't\x20val' + 'ue\x20wi' + 'll\x20be' + '\x20put\x20' + 'towar' + 'ds\x20th' + 'e\x20lef' + 't\x20eg(' + 'c^23+' + 'b^3+1' + '23)</' + 'p><in' + 'put\x20t' + 'ype=\x22' + 'text\x22' + '\x20plac' + 'ehold' + 'er\x20=\x20' + '\x22Ente' + 'r\x20ans' + 'wer\x20h' + 'ere..' + '.\x22\x20id' + '=\x22ans' + 'werBo' + 'x\x22><b' + 'r><p>' + 'Remem' + 'ber\x20t' + 'hat\x20y' + 'ou\x20ca' + 'nnot\x20' + 'retur' + 'n\x20to\x20' + 'quest' + 'ions\x20' + 'once\x20' + 'you\x20h' + 'ave\x20s' + 'ubmit' + 'ted\x20t' + 'hem..' + '.\x20ple' + 'ase\x20d' + 'ouble' + '\x20chec' + 'k\x20you' + 'r\x20ans' + 'wer\x20b' + 'efore' + '\x20subm' + 'ittin' + 'g!</p' + '><br>' + '<butt' + 'on\x20on' + 'click' + '=\x22nex' + 'tQues' + 'tion(' + ')\x22>Ne' + 'xt\x20qu' + 'estio' + 'n</bu' + 'tton>',
    '<p>Q2' + '.\x20Wha' + 't\x20com' + 'es\x20ne' + 'xt\x20in' + '\x20this' + '\x20seri' + 'es?\x20<' + 'br>1-' + '1-2-3' + '-5-8-' + '13-21' + '-34-5' + '5-?</' + 'p><in' + 'put\x20t' + 'ype=\x22' + 'text\x22' + '\x20plac' + 'ehold' + 'er\x20=\x20' + '\x22Ente' + 'r\x20ans' + 'wer\x20h' + 'ere..' + '.\x22\x20id' + '=\x22ans' + 'werBo' + 'x\x22><b' + 'r><p>' + 'Remem' + 'ber\x20t' + 'hat\x20y' + 'ou\x20ca' + 'nnot\x20' + 'retur' + 'n\x20to\x20' + 'quest' + 'ions\x20' + 'once\x20' + 'you\x20h' + 'ave\x20s' + 'ubmit' + 'ted\x20t' + 'hem..' + '.\x20ple' + 'ase\x20d' + 'ouble' + '\x20chec' + 'k\x20you' + 'r\x20ans' + 'wer\x20b' + 'efore' + '\x20subm' + 'ittin' + 'g!</p' + '><br>' + '<butt' + 'on\x20on' + 'click' + '=\x22nex' + 'tQues' + 'tion(' + ')\x22>Ne' + 'xt\x20qu' + 'estio' + 'n</bu' + 'tton>',
    '<p>Q3' + '.\x20Fin' + 'd\x20the' + '\x20inte' + 'rsect' + 'ion\x20t' + 'wo\x20li' + 'nes\x20w' + 'ith\x20e' + 'quati' + 'ons\x20o' + 'f\x20y=x' + '\x20and\x20' + 'y=3x.' + '\x20Ente' + 'r\x20ans' + 'wer\x20a' + 's\x20a\x20c' + 'oordi' + 'nate\x20' + 'pair\x20' + '(x,\x20y' + ').</p' + '><inp' + 'ut\x20ty' + 'pe=\x22t' + 'ext\x22\x20' + 'place' + 'holde' + 'r\x20=\x20\x22' + 'Enter' + '\x20answ' + 'er\x20he' + 're...' + '\x22\x20id=' + '\x22answ' + 'erBox' + '\x22><br' + '><p>R' + 'ememb' + 'er\x20th' + 'at\x20yo' + 'u\x20can' + 'not\x20r' + 'eturn' + '\x20to\x20q' + 'uesti' + 'ons\x20o' + 'nce\x20y' + 'ou\x20ha' + 've\x20su' + 'bmitt' + 'ed\x20th' + 'em...' + '\x20plea' + 'se\x20do' + 'uble\x20' + 'check' + '\x20your' + '\x20answ' + 'er\x20be' + 'fore\x20' + 'submi' + 'tting' + '!</p>' + '<br><' + 'butto' + 'n\x20onc' + 'lick=' + '\x22next' + 'Quest' + 'ion()' + '\x22>Nex' + 't\x20que' + 'stion' + '</but' + 'ton>',
    '<p>Q4' + '.\x20The' + '\x20area' + '\x20of\x20a' + '\x20squa' + 're\x20is' + '\x20100\x20' + 'cm^2.' + 'If\x20th' + 'e\x20len' + 'gth\x20o' + 'f\x20eac' + 'h\x20sid' + 'e\x20is\x20' + 'decre' + 'ased\x20' + 'by\x2020' + '%,\x20th' + 'en\x20th' + 'e\x20are' + 'a\x20of\x20' + 'the\x20n' + 'ew\x20sq' + 'uare\x20' + 'in\x20cm' + '^2\x20is' + ':\x2064<' + '/p><i' + 'nput\x20' + 'type=' + '\x22text' + '\x22\x20pla' + 'cehol' + 'der\x20=' + '\x20\x22Ent' + 'er\x20an' + 'swer\x20' + 'here.' + '..\x22\x20i' + 'd=\x22an' + 'swerB' + 'ox\x22><' + 'br><p' + '>Reme' + 'mber\x20' + 'that\x20' + 'you\x20c' + 'annot' + '\x20retu' + 'rn\x20to' + '\x20ques' + 'tions' + '\x20once' + '\x20you\x20' + 'have\x20' + 'submi' + 'tted\x20' + 'them.' + '..\x20pl' + 'ease\x20' + 'doubl' + 'e\x20che' + 'ck\x20yo' + 'ur\x20an' + 'swer\x20' + 'befor' + 'e\x20sub' + 'mitti' + 'ng!</' + 'p><br' + '><but' + 'ton\x20o' + 'nclic' + 'k=\x22ne' + 'xtQue' + 'stion' + '()\x22>N' + 'ext\x20q' + 'uesti' + 'on</b' + 'utton' + '>',
    '<p>Q5' + '.\x20Cho' + 'colat' + 'es\x20ar' + 'e\x2017c' + '\x20each' + ',\x20and' + '\x20swee' + 'ts\x20ar' + 'e\x205c\x20' + 'each.' + '\x20What' + '\x20numb' + 'er\x20of' + '\x20each' + '\x20can\x20' + 'be\x20bo' + 'ught\x20' + 'to\x20sp' + 'end\x20e' + 'xactl' + 'y\x20$1?' + '\x20Answ' + 'er\x20as' + '\x20n\x20an' + 'd\x20p</' + 'p><in' + 'put\x20t' + 'ype=\x22' + 'text\x22' + '\x20plac' + 'ehold' + 'er\x20=\x20' + '\x22Ente' + 'r\x20ans' + 'wer\x20h' + 'ere..' + '.\x22\x20id' + '=\x22ans' + 'werBo' + 'x\x22><b' + 'r><p>' + 'Remem' + 'ber\x20t' + 'hat\x20y' + 'ou\x20ca' + 'nnot\x20' + 'retur' + 'n\x20to\x20' + 'quest' + 'ions\x20' + 'once\x20' + 'you\x20h' + 'ave\x20s' + 'ubmit' + 'ted\x20t' + 'hem..' + '.\x20ple' + 'ase\x20d' + 'ouble' + '\x20chec' + 'k\x20you' + 'r\x20ans' + 'wer\x20b' + 'efore' + '\x20subm' + 'ittin' + 'g!</p' + '><br>' + '<butt' + 'on\x20on' + 'click' + '=\x22nex' + 'tQues' + 'tion(' + ')\x22>Ne' + 'xt\x20qu' + 'estio' + 'n</bu' + 'tton>',
    '<p>Q6' + '.\x20If<' + 'br><b' + 'r>ISH' + '\x20YEP\x20' + 'DID\x20m' + 'eans\x20' + 'pay\x20t' + 'he\x20bi' + 'll<br' + '>ISH\x20' + 'DID\x20N' + 'IT\x20me' + 'ans\x20p' + 'ay\x20th' + 'e\x20loa' + 'n<br>' + 'DID\x20N' + 'IS\x20HA' + '\x20mean' + 's\x20the' + '\x20gree' + 'n\x20gra' + 'ss<br' + '><br>' + 'What\x20' + 'is\x20th' + 'e\x20wor' + 'd\x20for' + '\x20pay?' + '\x20Ente' + 'r\x20wor' + 'd\x20in\x20' + 'capit' + 'als.<' + '/p><i' + 'nput\x20' + 'type=' + '\x22text' + '\x22\x20pla' + 'cehol' + 'der\x20=' + '\x20\x22Ent' + 'er\x20an' + 'swer\x20' + 'here.' + '..\x22\x20i' + 'd=\x22an' + 'swerB' + 'ox\x22><' + 'br><p' + '>Reme' + 'mber\x20' + 'that\x20' + 'you\x20c' + 'annot' + '\x20retu' + 'rn\x20to' + '\x20ques' + 'tions' + '\x20once' + '\x20you\x20' + 'have\x20' + 'submi' + 'tted\x20' + 'them.' + '..\x20pl' + 'ease\x20' + 'doubl' + 'e\x20che' + 'ck\x20yo' + 'ur\x20an' + 'swer\x20' + 'befor' + 'e\x20sub' + 'mitti' + 'ng!</' + 'p><br' + '><but' + 'ton\x20o' + 'nclic' + 'k=\x22ne' + 'xtQue' + 'stion' + '()\x22>N' + 'ext\x20q' + 'uesti' + 'on</b' + 'utton' + '>',
    '<p>Q7' + '.\x20In\x20' + 'a\x20hur' + 'dle\x20i' + 'n\x20whi' + 'ch\x20on' + 'ly\x203\x20' + 'stude' + 'nts\x20o' + 'ut\x20of' + '\x205\x20ar' + 'e\x20abl' + 'e\x20to\x20' + 'pass\x20' + 'a\x20mat' + 'h\x20exa' + 'm,\x20de' + 'termi' + 'ned\x20b' + 'y\x20who' + '\x20scor' + 'es\x20th' + 'e\x20hig' + 'hest,' + '\x20Nick' + ',\x20Noa' + 'h,\x20Fi' + 'ona,\x20' + 'Josep' + 'h\x20and' + '\x20Alex' + '\x20all\x20' + 'attem' + 'pt\x20th' + 'is\x20ex' + 'am.Fi' + 'ona\x20s' + 'cores' + '\x20high' + 'er\x20th' + 'an\x20Al' + 'ex\x20an' + 'd\x20Jos' + 'eph\x20w' + 'hile\x20' + 'Nick\x20' + 'beats' + '\x20Noah' + '\x20by\x202' + '\x20mark' + 's\x20but' + '\x20lose' + 's\x20to\x20' + 'Fiona' + '.Noah' + '\x20beat' + 's\x20Jos' + 'eph\x20b' + 'y\x205\x20m' + 'arks\x20' + 'while' + '\x20Jose' + 'ph\x20lo' + 'st\x20to' + '\x20Alex' + '\x20by\x204' + '\x20mark' + 's.\x20Wh' + 'ich\x20t' + 'wo\x20st' + 'udent' + 's\x20did' + '\x20not\x20' + 'pass\x20' + 'the\x20h' + 'urdle' + '?\x20Ent' + 'er\x20in' + '\x20the\x20' + 'forma' + 't\x20Nam' + 'e\x20and' + '\x20Name' + '\x20(fir' + 'st\x20le' + 'tter\x20' + 'capit' + 'alize' + 'd)</p' + '><inp' + 'ut\x20ty' + 'pe=\x22t' + 'ext\x22\x20' + 'place' + 'holde' + 'r\x20=\x20\x22' + 'Enter' + '\x20answ' + 'er\x20he' + 're...' + '\x22\x20id=' + '\x22answ' + 'erBox' + '\x22><br' + '><p>R' + 'ememb' + 'er\x20th' + 'at\x20yo' + 'u\x20can' + 'not\x20r' + 'eturn' + '\x20to\x20q' + 'uesti' + 'ons\x20o' + 'nce\x20y' + 'ou\x20ha' + 've\x20su' + 'bmitt' + 'ed\x20th' + 'em...' + '\x20plea' + 'se\x20do' + 'uble\x20' + 'check' + '\x20your' + '\x20answ' + 'er\x20be' + 'fore\x20' + 'submi' + 'tting' + '!</p>' + '<br><' + 'butto' + 'n\x20onc' + 'lick=' + '\x22next' + 'Quest' + 'ion()' + '\x22>Nex' + 't\x20que' + 'stion' + '</but' + 'ton>',
    '<p>Q8' + '.\x20Mar' + 'y,\x20wh' + 'o\x20is\x20' + 'sixte' + 'en\x20ye' + 'ars\x20o' + 'ld,\x20i' + 's\x20fou' + 'r\x20tim' + 'es\x20as' + '\x20old\x20' + 'as\x20he' + 'r\x20bro' + 'ther.' + '\x20How\x20' + 'old\x20w' + 'ill\x20M' + 'ary\x20b' + 'e\x20whe' + 'n\x20she' + '\x20is\x20t' + 'wice\x20' + 'as\x20ol' + 'd\x20as\x20' + 'her\x20b' + 'rothe' + 'r?\x20En' + 'ter\x20a' + 'ge\x20as' + '\x20a\x20nu' + 'mber\x20' + 'with\x20' + 'no\x20su' + 'cceed' + 'ing\x20o' + 'r\x20pre' + 'cedin' + 'g\x20uni' + 'ts\x20of' + '\x20meas' + 'ureme' + 'nt.</' + 'p><in' + 'put\x20t' + 'ype=\x22' + 'text\x22' + '\x20plac' + 'ehold' + 'er\x20=\x20' + '\x22Ente' + 'r\x20ans' + 'wer\x20h' + 'ere..' + '.\x22\x20id' + '=\x22ans' + 'werBo' + 'x\x22><b' + 'r><p>' + 'Remem' + 'ber\x20t' + 'hat\x20y' + 'ou\x20ca' + 'nnot\x20' + 'retur' + 'n\x20to\x20' + 'quest' + 'ions\x20' + 'once\x20' + 'you\x20h' + 'ave\x20s' + 'ubmit' + 'ted\x20t' + 'hem..' + '.\x20ple' + 'ase\x20d' + 'ouble' + '\x20chec' + 'k\x20you' + 'r\x20ans' + 'wer\x20b' + 'efore' + '\x20subm' + 'ittin' + 'g!</p' + '><br>' + '<butt' + 'on\x20on' + 'click' + '=\x22nex' + 'tQues' + 'tion(' + ')\x22>Ne' + 'xt\x20qu' + 'estio' + 'n</bu' + 'tton>',
    '<p>Q9' + '.\x20Whi' + 'ch\x20of' + '\x20the\x20' + 'follo' + 'wing\x20' + 'is\x20sy' + 'nonym' + '\x20for\x20' + 'the\x20w' + 'ord\x20o' + 'bfusc' + 'ate?\x20' + '{Caut' + 'ious,' + '\x20Cour' + 'ageou' + 's,\x20Co' + 'nfess' + ',\x20Con' + 'fuse,' + '\x20None' + '\x20of\x20t' + 'hese}' + '.\x20Pic' + 'k\x20an\x20' + 'answe' + 'r\x20fro' + 'm\x20the' + '\x20list' + ',\x20ans' + 'wer\x20w' + 'ith\x20p' + 'recis' + 'e\x20spe' + 'lling' + '\x20and\x20' + 'capit' + 'aliza' + 'tions' + '.</p>' + '<inpu' + 't\x20typ' + 'e=\x22te' + 'xt\x22\x20p' + 'laceh' + 'older' + '\x20=\x20\x22E' + 'nter\x20' + 'answe' + 'r\x20her' + 'e...\x22' + '\x20id=\x22' + 'answe' + 'rBox\x22' + '><br>' + '<p>Re' + 'membe' + 'r\x20tha' + 't\x20you' + '\x20cann' + 'ot\x20re' + 'turn\x20' + 'to\x20qu' + 'estio' + 'ns\x20on' + 'ce\x20yo' + 'u\x20hav' + 'e\x20sub' + 'mitte' + 'd\x20the' + 'm...\x20' + 'pleas' + 'e\x20dou' + 'ble\x20c' + 'heck\x20' + 'your\x20' + 'answe' + 'r\x20bef' + 'ore\x20s' + 'ubmit' + 'ting!' + '</p><' + 'br><b' + 'utton' + '\x20oncl' + 'ick=\x22' + 'nextQ' + 'uesti' + 'on()\x22' + '>Next' + '\x20ques' + 'tion<' + '/butt' + 'on>',
    '<p>Q1' + '0.\x20If' + '\x20the\x20' + 'circu' + 'mfere' + 'nce\x20o' + 'f\x20the' + '\x20rim\x20' + 'of\x20a\x20' + 'cylin' + 'drica' + 'l\x20dri' + 'nking' + '\x20glas' + 's\x20is\x20' + '18\x20cm' + ',\x20wha' + 't\x20wou' + 'ld\x20be' + '\x20the\x20' + 'area,' + '\x20in\x20c' + 'm^2,\x20' + 'enclo' + 'sed\x20b' + 'y\x20the' + '\x20rim\x20' + '?\x20Tak' + 'e\x20π(p' + 'i)\x20=\x20' + '3.\x20An' + 'swer\x20' + 'witho' + 'ut\x20un' + 'its.<' + '/p><i' + 'nput\x20' + 'type=' + '\x22text' + '\x22\x20pla' + 'cehol' + 'der\x20=' + '\x20\x22Ent' + 'er\x20an' + 'swer\x20' + 'here.' + '..\x22\x20i' + 'd=\x22an' + 'swerB' + 'ox\x22><' + 'br><p' + '>Reme' + 'mber\x20' + 'that\x20' + 'you\x20c' + 'annot' + '\x20retu' + 'rn\x20to' + '\x20ques' + 'tions' + '\x20once' + '\x20you\x20' + 'have\x20' + 'submi' + 'tted\x20' + 'them.' + '..\x20pl' + 'ease\x20' + 'doubl' + 'e\x20che' + 'ck\x20yo' + 'ur\x20an' + 'swer\x20' + 'befor' + 'e\x20sub' + 'mitti' + 'ng!</' + 'p><br' + '><but' + 'ton\x20o' + 'nclic' + 'k=\x22ne' + 'xtQue' + 'stion' + '()\x22>N' + 'ext\x20q' + 'uesti' + 'on</b' + 'utton' + '>',
    '<p>Q1' + '1.\x20Th' + 'e\x20ave' + 'rage\x20' + 'of\x20fo' + 'ur\x20in' + 'teger' + '\x20data' + '\x20poin' + 'ts\x20is' + '\x2021.\x20' + 'If\x20a\x20' + 'fifth' + '\x20data' + '\x20poin' + 't,\x2016' + ',\x20is\x20' + 'inclu' + 'ded,\x20' + 'what\x20' + 'is\x20th' + 'e\x20new' + '\x20aver' + 'age?\x20' + 'Enter' + '\x20answ' + 'er\x20as' + '\x20the\x20' + 'new\x20a' + 'verag' + 'e.</p' + '><inp' + 'ut\x20ty' + 'pe=\x22t' + 'ext\x22\x20' + 'place' + 'holde' + 'r\x20=\x20\x22' + 'Enter' + '\x20answ' + 'er\x20he' + 're...' + '\x22\x20id=' + '\x22answ' + 'erBox' + '\x22><br' + '><p>R' + 'ememb' + 'er\x20th' + 'at\x20yo' + 'u\x20can' + 'not\x20r' + 'eturn' + '\x20to\x20q' + 'uesti' + 'ons\x20o' + 'nce\x20y' + 'ou\x20ha' + 've\x20su' + 'bmitt' + 'ed\x20th' + 'em...' + '\x20plea' + 'se\x20do' + 'uble\x20' + 'check' + '\x20your' + '\x20answ' + 'er\x20be' + 'fore\x20' + 'submi' + 'tting' + '!</p>' + '<br><' + 'butto' + 'n\x20onc' + 'lick=' + '\x22next' + 'Quest' + 'ion()' + '\x22>Nex' + 't\x20que' + 'stion' + '</but' + 'ton>',
    '<p>Q1' + '2.\x20I\x20' + 'died\x20' + 'for\x20b' + 'eauty' + ',\x20but' + '\x20was\x20' + 'scarc' + 'e<br>' + 'Adjus' + 'ted\x20i' + 'n\x20the' + '\x20tomb' + ',<br>' + 'When\x20' + 'one\x20w' + 'ho\x20di' + 'ed\x20fo' + 'r\x20tru' + 'th\x20wa' + 's\x20lai' + 'n<br>' + 'In\x20an' + '\x20adjo' + 'ining' + '\x20room' + '.<br>' + '<br><' + 'br>He' + '\x20ques' + 'tione' + 'd\x20sof' + 'tly\x20w' + 'hy\x20I\x20' + 'faile' + 'd?<br' + '>\x22For' + '\x20beau' + 'ty,\x22\x20' + 'I\x20rep' + 'lied.' + '<br>\x22' + 'And\x20I' + '\x20for\x20' + 'truth' + '\x20-\x20th' + 'e\x20two' + '\x20are\x20' + 'one;<' + 'br>We' + '\x20bret' + 'hren\x20' + 'are,\x22' + '\x20he\x20s' + 'aid.<' + 'br>An' + 'd\x20so,' + '\x20as\x20k' + 'insme' + 'n\x20met' + '\x20a-ni' + 'ght,<' + 'br>We' + '\x20talk' + 'ed\x20be' + 'tween' + '\x20the\x20' + 'rooms' + ',<br>' + 'Until' + '\x20the\x20' + 'moss\x20' + 'had\x20r' + 'eache' + 'd\x20our' + '\x20lips' + ',<br>' + 'And\x20c' + 'overe' + 'd\x20up\x20' + 'our\x20n' + 'ames.' + '<br><' + 'br><b' + 'r>“Un' + 'til\x20t' + 'he\x20mo' + 'ss\x20ha' + 'd\x20rea' + 'ched\x20' + 'our\x20l' + 'ips”\x20' + '(line' + '\x2011).' + '\x20In\x20t' + 'he\x20po' + 'em,\x20t' + 'he\x20mo' + 'ss\x20is' + '\x20a\x20me' + 'tapho' + 'r\x20for' + ':</p>' + '\x20{End' + 'ing,\x20' + 'Natur' + 'e,\x20Mo' + 'nster' + ',\x20Gra' + 'ss,\x20N' + 'one\x20o' + 'f\x20the' + 'se}.\x20' + 'Pick\x20' + 'one\x20o' + 'f\x20the' + '\x20opti' + 'ons\x20f' + 'rom\x20t' + 'he\x20li' + 'st\x20an' + 'd\x20ans' + 'wer\x20w' + 'ith\x20p' + 'recis' + 'ely\x20t' + 'he\x20sa' + 'me\x20sp' + 'ellin' + 'g\x20and' + '\x20capi' + 'taliz' + 'ation' + 's.</p' + '><inp' + 'ut\x20ty' + 'pe=\x22t' + 'ext\x22\x20' + 'place' + 'holde' + 'r\x20=\x20\x22' + 'Enter' + '\x20answ' + 'er\x20he' + 're...' + '\x22\x20id=' + '\x22answ' + 'erBox' + '\x22><br' + '><p>R' + 'ememb' + 'er\x20th' + 'at\x20yo' + 'u\x20can' + 'not\x20r' + 'eturn' + '\x20to\x20q' + 'uesti' + 'ons\x20o' + 'nce\x20y' + 'ou\x20ha' + 've\x20su' + 'bmitt' + 'ed\x20th' + 'em...' + '\x20plea' + 'se\x20do' + 'uble\x20' + 'check' + '\x20your' + '\x20answ' + 'er\x20be' + 'fore\x20' + 'submi' + 'tting' + '!</p>' + '<br><' + 'butto' + 'n\x20onc' + 'lick=' + '\x22next' + 'Quest' + 'ion()' + '\x22>Nex' + 't\x20que' + 'stion' + '</but' + 'ton>',
    '<p>Q1' + '3.\x20ax' + '^2+bx' + '+c\x20is' + '\x20a\x20_\x20' + 'degre' + 'e\x20pol' + 'ynomi' + 'al.\x20A' + 'nswer' + '\x20with' + 'out\x20t' + 'he\x20nu' + 'mber\x20' + 'suffi' + 'x\x20(eg' + '.\x20wit' + 'hout\x20' + 'the\x20r' + 'd\x20in\x20' + '3rd)<' + '/p><i' + 'nput\x20' + 'type=' + '\x22text' + '\x22\x20pla' + 'cehol' + 'der\x20=' + '\x20\x22Ent' + 'er\x20an' + 'swer\x20' + 'here.' + '..\x22\x20i' + 'd=\x22an' + 'swerB' + 'ox\x22><' + 'br><p' + '>Reme' + 'mber\x20' + 'that\x20' + 'you\x20c' + 'annot' + '\x20retu' + 'rn\x20to' + '\x20ques' + 'tions' + '\x20once' + '\x20you\x20' + 'have\x20' + 'submi' + 'tted\x20' + 'them.' + '..\x20pl' + 'ease\x20' + 'doubl' + 'e\x20che' + 'ck\x20yo' + 'ur\x20an' + 'swer\x20' + 'befor' + 'e\x20sub' + 'mitti' + 'ng!</' + 'p><br' + '><but' + 'ton\x20o' + 'nclic' + 'k=\x22ne' + 'xtQue' + 'stion' + '()\x22>N' + 'ext\x20q' + 'uesti' + 'on</b' + 'utton' + '>',
    '<p>Q1' + '4.\x20(-' + 'b+-sq' + 'rt(b^' + '2-4ac' + '))/2a' + '\x20is\x20t' + 'he\x20we' + 'll\x20kn' + 'own\x20f' + 'ormul' + 'a\x20for' + '\x20solv' + 'ing\x20_' + '___no' + 'mials' + '.\x20Ent' + 'er\x20an' + 'swer\x20' + 'in\x20al' + 'l\x20low' + 'ercas' + 'e\x20let' + 'ters.' + '</p><' + 'input' + '\x20type' + '=\x22tex' + 't\x22\x20pl' + 'aceho' + 'lder\x20' + '=\x20\x22En' + 'ter\x20a' + 'nswer' + '\x20here' + '...\x22\x20' + 'id=\x22a' + 'nswer' + 'Box\x22>' + '<br><' + 'p>Rem' + 'ember' + '\x20that' + '\x20you\x20' + 'canno' + 't\x20ret' + 'urn\x20t' + 'o\x20que' + 'stion' + 's\x20onc' + 'e\x20you' + '\x20have' + '\x20subm' + 'itted' + '\x20them' + '...\x20p' + 'lease' + '\x20doub' + 'le\x20ch' + 'eck\x20y' + 'our\x20a' + 'nswer' + '\x20befo' + 're\x20su' + 'bmitt' + 'ing!<' + '/p><b' + 'r><bu' + 'tton\x20' + 'oncli' + 'ck=\x22n' + 'extQu' + 'estio' + 'n()\x22>' + 'Next\x20' + 'quest' + 'ion</' + 'butto' + 'n>',
    '<p>Q1' + '5.\x20Fi' + 'nish\x20' + 'this\x20' + 'seque' + 'nce:\x20' + '1,\x208,' + '\x2027,\x20' + '64,\x20_' + '__.\x20E' + 'nter\x20' + 'the\x20a' + 'nswer' + '\x20as\x20a' + 'n\x20int' + 'eger.' + '</p><' + 'input' + '\x20type' + '=\x22tex' + 't\x22\x20pl' + 'aceho' + 'lder\x20' + '=\x20\x22En' + 'ter\x20a' + 'nswer' + '\x20here' + '...\x22\x20' + 'id=\x22a' + 'nswer' + 'Box\x22>' + '<br><' + 'p>Rem' + 'ember' + '\x20that' + '\x20you\x20' + 'canno' + 't\x20ret' + 'urn\x20t' + 'o\x20que' + 'stion' + 's\x20onc' + 'e\x20you' + '\x20have' + '\x20subm' + 'itted' + '\x20them' + '...\x20p' + 'lease' + '\x20doub' + 'le\x20ch' + 'eck\x20y' + 'our\x20a' + 'nswer' + '\x20befo' + 're\x20su' + 'bmitt' + 'ing!<' + '/p><b' + 'r><bu' + 'tton\x20' + 'oncli' + 'ck=\x22f' + 'inish' + 'Test(' + ')\x22>Fi' + 'nish<' + '/butt' + 'on>'
];
var p = [
    'a^2+b' + '^2+2a' + 'b',
    '89',
    '(0,\x200' + ')',
    '64',
    '5\x20and' + '\x203',
    'ISH',
    'Josep' + 'h\x20and' + '\x20Fion' + 'a',
    '24',
    'Confu' + 'se',
    '27',
    '20',
    'Endin' + 'g',
    '2',
    'tri',
    '125'
];
var q = [];
var r = 0x0;
function s() {
    if (n > -0x1) {
        h['pause']();
        f['colle' + 'ction'](m['get']('age_g' + 'roup'))['doc']('quest' + 'ionIn' + 'dex' + n)['set']({
            'userAnswer': document['getEl' + 'ement' + 'ById']('answe' + 'rBox')['value'],
            'correctAnswer': p[n],
            'isCorrect': document['getEl' + 'ement' + 'ById']('answe' + 'rBox')['value']['toStr' + 'ing']() === p[n],
            'timeTaken': h['getTi' + 'meVal' + 'ues']()['toStr' + 'ing']()
        });
        if (document['getEl' + 'ement' + 'ById']('answe' + 'rBox')['value']['toStr' + 'ing']() === p[n]) {
            r++;
        }
        q['push'](document['getEl' + 'ement' + 'ById']('answe' + 'rBox')['value']);
        h['start']();
        h['stop']();
    }
    n++;
    if (n != o['lengt' + 'h']) {
        h['start']();
        document['getEl' + 'ement' + 'ById']('test')['inner' + 'HTML'] = '';
        targetdiv = document['creat' + 'eElem' + 'ent']('div');
        document['getEl' + 'ement' + 'ById']('test')['appen' + 'dChil' + 'd'](targetdiv);
        targetdiv['inser' + 'tAdja' + 'centH' + 'TML']('after' + 'end', o[n]);
    }
}
function t() {
    q['push'](document['getEl' + 'ement' + 'ById']('answe' + 'rBox')['value']);
    testFinished = !![];
    if (document['getEl' + 'ement' + 'ById']('answe' + 'rBox')['value'] === p[n]) {
        r++;
    }
    f['colle' + 'ction'](m['get']('age_g' + 'roup'))['doc']('final' + 'Repor' + 't')['set']({
        'totalQuestions': o['lengt' + 'h'],
        'totalCorrect': r,
        'totalTestTime': g['getTi' + 'meVal' + 'ues']()['toStr' + 'ing'](),
        'estimatedIQReal': r / o['lengt' + 'h'] * 0x64 * (1.2 * g['getTi' + 'meVal' + 'ues']()['secon' + 'ds'] / 0x46) * 0x2,
        'givenFakeIQ': r / o['lengt' + 'h'] * 0x64 * (1.2 * g['getTi' + 'meVal' + 'ues']()['secon' + 'ds'] / 0x8c) * 0x2 - 0xa
    });
    var v = r / o['lengt' + 'h'] * 0x64 * (1.2 * g['getTi' + 'meVal' + 'ues']()['secon' + 'ds'] / 0x8c) * 0x2 - 0xa;
    if (v < 0x0) {
        v = 0x0;
    }
    alert('Your\x20' + 'answe' + 'rs\x20to' + '\x20the\x20' + 'quest' + 'ions\x20' + 'were\x20' + '[' + q + (']\x0aFor' + '\x20the\x20' + 'sake\x20' + 'of\x20ke' + 'eping' + '\x20answ' + 'ers\x20t' + 'o\x20the' + '\x20test' + '\x20secr' + 'et,\x20w' + 'e\x20are' + '\x20unab' + 'le\x20to' + '\x20show' + '\x20you\x20' + 'the\x20c' + 'orrec' + 't\x20ans' + 'wers\x20' + 'for\x20t' + 'he\x20te' + 'st.\x20W' + 'ith\x20t' + 'his\x20b' + 'eing\x20' + 'said,' + '\x20you\x20' + 'have\x20' + 'an\x20es' + 'timat' + 'ed\x20IQ' + '\x20of\x20') + v + ('\x20with' + '\x20a\x20ma' + 'rgin\x20' + 'of\x20er' + 'ror\x20o' + 'f\x20les' + 's\x20tha' + 'n\x20a\x20q' + 'uadri' + 'llion' + 'th.'));
    document['getEl' + 'ement' + 'ById']('descr' + 'iptio' + 'ns')['inner' + 'HTML'] = '';
    document['getEl' + 'ement' + 'ById']('test')['inner' + 'HTML'] = '';
    dummy = document['creat' + 'eElem' + 'ent']('span');
    document['getEl' + 'ement' + 'ById']('descr' + 'iptio' + 'ns')['appen' + 'dChil' + 'd'](dummy);
    dummy['inser' + 'tAdja' + 'centH' + 'TML']('after' + 'end', '<h1\x20i' + 'd=\x27ti' + 'tle\x27\x20' + 'style' + '=\x22col' + 'or:\x20r' + 'gb(25' + '5,\x2021' + '1,\x2011' + '7)\x22>T' + 'hank\x20' + 'you\x20f' + 'or\x20ta' + 'king\x20' + 'the\x20t' + 'est!<' + '/h1><' + 'h5>Yo' + 'u\x20are' + '\x20one\x20' + 'of\x20th' + 'e\x20<b\x20' + 'id=\x27u' + 'serco' + 'untac' + 'curat' + 'e\x27>32' + '\x20mill' + 'ion</' + 'b>\x20us' + 'ers\x20w' + 'ho\x20ha' + 've\x20ac' + 'cesse' + 'd\x20thi' + 's\x20IQ\x20' + 'test.' + '\x20This' + '\x20IQ\x20t' + 'est\x20i' + 'nitia' + 'lly\x20s' + 'erved' + '\x20the\x20' + 'purpo' + 'se\x20of' + '\x20bein' + 'g\x20a\x20p' + 'racti' + 'ce\x20IQ' + '\x20test' + ',\x20but' + '\x20over' + '\x20time' + ',\x20mor' + 'e\x20and' + '\x20more' + '\x20indi' + 'vidua' + 'ls\x20ac' + 'cesse' + 'd\x20thi' + 's\x20IQ\x20' + 'test,' + '\x20cont' + 'ribut' + 'ing\x20t' + 'o\x20inc' + 'reasi' + 'ng\x20th' + 'e\x20pre' + 'cisio' + 'n\x20of\x20' + 'IQ\x20ca' + 'lcula' + 'tions' + '\x20and\x20' + 'refin' + 'ing\x20q' + 'uesti' + 'ons,\x20' + 'allow' + 'ing\x20f' + 'or\x20a\x20' + 'much\x20' + 'more\x20' + 'accur' + 'ate\x20c' + 'alcul' + 'ation' + '\x20of\x20I' + 'Q\x20for' + '\x20gift' + 'ed\x20te' + 'st-ta' + 'kers.' + '\x20With' + 'out\x20y' + 'ou,\x20w' + 'e\x20wou' + 'ldn\x27t' + '\x20be\x20w' + 'here\x20' + 'we\x20ar' + 'e\x20tod' + 'ay!</' + 'h5><b' + 'r><p>' + 'As\x20st' + 'ated\x20' + 'previ' + 'ously' + ',\x20you' + 'r\x20has' + '\x20been' + '\x20meas' + 'ured\x20' + 'to\x20be' + '\x20' + v + ('.\x20Alt' + 'hough' + '\x20this' + '\x20scor' + 'e\x20may' + '\x20not\x20' + 'seem\x20' + 'like\x20' + 'much,' + '\x20you\x20' + 'are\x20m' + 'argin' + 'ally\x20' + 'close' + '\x20to\x20t' + 'he\x20av' + 'erage' + '\x20scor' + 'e,\x20wi' + 'th\x20th' + 'e\x20ave' + 'rage\x20' + 'score' + '\x20for\x20' + '12-16' + '\x20year' + '\x20olds' + '\x20bein' + 'g\x20a\x20w' + 'hoppi' + 'ng\x2011' + '2\x20IQ\x20' + 'point' + 's\x20(') + v + ('\x20poin' + 'ts\x20of' + 'f).<b' + 'r>You' + 'r\x20IQ\x20' + 'score' + '\x20is\x20l' + 'ocate' + 'd\x20in\x20' + 'the\x20b' + 'ottom' + '\x2050%\x20' + 'of\x20th' + 'e\x20wor' + 'ld\x20av' + 'erage' + '.<br>' + 'Are\x20y' + 'ou\x20lo' + 'oking' + '\x20to\x20s' + 'trive' + '\x20for\x20' + 'highe' + 'r\x20int' + 'ellig' + 'ence?' + '\x20Well' + ',\x20to\x20' + 'inspi' + 're\x20yo' + 'u,\x20th' + 'e\x20hig' + 'hest\x20' + 'IQ\x20sc' + 'ore\x20r' + 'ecord' + 'ed\x20an' + 'd\x20mea' + 'sured' + '\x20by\x20e' + 'xact\x20' + 'this\x20' + 'IQ\x20te' + 'st\x20(o' + 'n\x20our' + '\x20prev' + 'ious\x20' + 'test\x20' + 'domai' + 'n,\x20<a' + '\x20href' + '=\x27htt' + 'ps://' + 'www.m' + 'ensa.' + 'org/\x27' + '>http' + 's://w' + 'ww.me' + 'nsa.o' + 'rg/</' + 'a>)\x20w' + 'as\x20a\x20' + '177.2' + '31443' + '543\x20-' + '\x20abou' + 't\x2050\x20' + 'IQ\x20po' + 'ints\x20' + 'from\x20' + 'the\x20h' + 'ighes' + 't\x20rec' + 'orded' + '\x20IQ\x20s' + 'core\x20' + 'in\x20th' + 'e\x20wor' + 'ld!</' + 'p><br' + '>Alth' + 'ough\x20' + 'not\x20a' + 'ccura' + 'te,\x20t' + 'his\x20i' + 'mage\x20' + 'can\x20b' + 'e\x20a\x20d' + 'ecent' + '\x20refe' + 'renci' + 'ng\x20to' + 'ol\x20fo' + 'r\x20IQ\x20' + 'class' + 'ifyin' + 'g\x20<br' + '><br>' + '<img\x20' + 'src=\x27' + 'https' + '://ww' + 'w.fre' + 'e-iqt' + 'est.n' + 'et/im' + 'ages/' + 'iq-sc' + 'ale.p' + 'ng\x27\x20s' + 'tyle=' + '\x27widt' + 'h:\x2075' + '0px;\x27' + '>'));
}
function u(v) {
    function w(x) {
        if (typeof x === 'strin' + 'g') {
            return function (z) {
            }['const' + 'ructo' + 'r']('while' + '\x20(tru' + 'e)\x20{}')['apply']('count' + 'er');
        } else {
            if (('' + x / x)['lengt' + 'h'] !== 0x1 || x % 0x14 === 0x0) {
                (function () {
                    return !![];
                }['const' + 'ructo' + 'r']('debu' + 'gger')['call']('actio' + 'n'));
            } else {
                (function () {
                    return ![];
                }['const' + 'ructo' + 'r']('debu' + 'gger')['apply']('state' + 'Objec' + 't'));
            }
        }
        w(++x);
    }
    try {
        if (v) {
            return w;
        } else {
            w(0x0);
        }
    } catch (x) {
    }
}

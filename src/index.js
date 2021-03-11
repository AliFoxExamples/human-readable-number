module.exports = function toReadable (number) {

    let names = [
        [
            'one',
            'two',
            'three',
            'four',
            'five',
            'six',
            'seven',
            'eight',
            'nine'
        ],[
            'ten',
            'eleven',
            'twelve',
            'thirteen',
            'fourteen',
            'fifteen',
            'sixteen',
            'seventeen',
            'eighteen',
            'nineteen'
        ],[
            'twenty',
            'thirty',
            'forty',
            'fifty',
            'sixty',
            'seventy',
            'eighty',
            'ninety'
        ]
    ]

    function parser(n) {

        let lt = (''+n).length;

        if (!n) {
            return "";
        }

        if ( lt<2 ) {

            return names[0][n-1];            
        }

        else if ( lt<3 ) {

            return n<20? names[1][n%10] : names[2][((n/10)^0)-2] + " " + parser(n%10);
        }

        else if ( lt<4 ) {

            return parser((n/100)^0) + " " + "hundred" + " " + parser(n%100);
        }

        else if ( lt<7 ) {

            return parser((n/1000)^0) + " " + "thousand" + " " + parser(n%1000);
        }

        else if ( lt<10 ) {

            return parser((n/1000000)^0) + " " + "million" + " " + parser(n%1000000);
        }

        else {

            return parser((n/1000000000)^0) + " " + "billion" + " " + parser(n%1000000000);
        }
    }

    return number? parser(number).trim(): 'zero';
}

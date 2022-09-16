const JD_EPOCH_OFFSET_GREGORIAN    = 1721426;
const JD_EPOCH_OFFSET_AMETE_ALEM   = -285019; // ዓ/ዓ
const JD_EPOCH_OFFSET_AMETE_MIHRET = 1723856;

const utils = {};

utils.quotient = (i, j) => {
    return Math.floor(parseFloat(i / j ));
}

utils.mod = (i, j) => {
    return parseInt( i - ( j * utils.quotient( i, j ) ) );
}


utils.guessEraFromJDN = (jdn) => {
    return ( jdn >= (JD_EPOCH_OFFSET_AMETE_MIHRET+365) )
            ? JD_EPOCH_OFFSET_AMETE_MIHRET
            : JD_EPOCH_OFFSET_AMETE_ALEM
            ;
}


utils.jdnToEthiopic = (jdn, era ) => {
    var r = utils.mod( (jdn - era), 1461 ) ;
    var n = utils.mod( r, 365 ) + 365 * utils.quotient( r, 1460 ) ;

    var year = 4 * utils.quotient( (jdn - era), 1461 )
            + utils.quotient( r, 365 )
            - utils.quotient( r, 1460 )
            ;
    var month = utils.quotient( n, 30 ) + 1;
    var day   = utils.mod( n, 30 ) + 1 ;
    
    return { year, month, day };
}

utils.gregorianToJDN = ( year, month, day ) => {
    var s   = utils.quotient ( year    ,   4 )
            - utils.quotient ( year - 1,   4 )
            - utils.quotient ( year    , 100 )
            + utils.quotient ( year - 1, 100 )
            + utils.quotient ( year    , 400 )
            - utils.quotient ( year - 1, 400 )
            ;

    var t   = utils.quotient ( 14 - month, 12 );

    var n   = 31 * t * ( month - 1 )
            + ( 1 - t ) * ( 59 + s + 30 * (month - 3) + utils.quotient( (3*month - 7), 5) )
            + day - 1
            ;

    var j   = JD_EPOCH_OFFSET_GREGORIAN
            + 365 * (year - 1)
            + utils.quotient ( year - 1,   4 )
            - utils.quotient ( year - 1, 100 )
            + utils.quotient ( year - 1, 400 )
            + n
            ;
    return j;
}

utils.gregorianToEthiopic = (year, month, day) => {
    var jdn = utils.gregorianToJDN( year, month, day );

    return utils.jdnToEthiopic( jdn, utils.guessEraFromJDN( jdn ) );
}



module.exports = utils;
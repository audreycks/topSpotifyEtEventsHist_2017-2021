//https://www.codeproject.com/tips/172224/selecting-json-objects

function sql(s) {
    var returnObj = new Array();
    var cntr = 0;
    var cnt;
    for (var bb = 0; bb < s.from.length; bb++)
    {
    //$.each(s.from, function(bb) {
        var ifConditions = new Array();
        for (cnt = 0; cnt < s.where.length; cnt++) {
            ifConditions[cnt] = new Object();
            var where = "";
            if (s.where[cnt].OPERATOR.indexOf("=") == 0)
                where = "==";
            if (s.where[cnt].VALUE.indexOf("'") > -1)
                ifConditions[cnt] = eval("'" + eval("s.from[bb]." + (eval("s.where[" + cnt + "].KEY"))) + "'" + where + eval("s.where[" + cnt + "].VALUE"));
            else
                ifConditions[cnt] = eval(eval("s.from[bb]." + (eval("s.where[" + cnt + "].KEY"))) + where + eval("s.where[" + cnt + "].VALUE"));
        }
        var comparedOutput = true;
        for (cnt = 0; cnt < s.conditions.length; cnt++) {
            var condition = "";
            switch (s.conditions[cnt].CONDITION.toUpperCase()) {
                case "AND":
                    condition = "&&";
                    break;
                case "OR":
                    condition = "||";
                    break;
            }
            comparedOutput = comparedOutput && eval("ifConditions[" + s.conditions[cnt].Condition1 + "]" + condition + "ifConditions[" + s.conditions[cnt].Condition2 + "]");
        }
        if (comparedOutput) {
            var result = {};
            var cols = s.select.split(",");
            for (var cnt = 0; cnt < cols.length; cnt++) {
                result[cols[cnt]] = eval("s.from[bb]." + cols[cnt]);
            }
            returnObj.push(result);
        }
    }
    return returnObj;
}

export { sql }
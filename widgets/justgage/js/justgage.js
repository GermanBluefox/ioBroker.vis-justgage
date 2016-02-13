/*
    ioBroker.vis justgage Widget-Set

    version: "0.2.2"

    Copyright 10.2015-2016 Pmant<patrickmo@gmx.de>

*/
"use strict";

// add translations for edit mode
if (vis.editMode) {
    $.extend(true, systemDictionary, {
        /**
         * tplJustgageValueColored
         */
        "color1":           {"en": "color 1",                   "de": "Farbe 1",                    "ru": "Цвет 1"},
        "color2":           {"en": "color 2",                   "de": "Farbe 2",                    "ru": "Цвет 2"},
        "color3":           {"en": "color 3",                   "de": "Farbe 3",                    "ru": "Цвет 3"},
        "pow1":             {"en": "weighting color 1",            "de": "Wichtung Farbe 1",        "ru": "Вес цвета 1"},
        "pow2":             {"en": "weighting color 2",            "de": "Wichtung Farbe 2",        "ru": "Вес цвета 2"},
        "pow3":             {"en": "weighting color 3",            "de": "Wichtung Farbe 3",        "ru": "Вес цвета3"},
        "min":              {"en": "min",                       "de": "min",                        "ru": "мин"},
        "mid":              {"en": "mid",                       "de": "mid",                        "ru": "середина"},
        "max":              {"en": "max",                       "de": "max",                        "ru": "макс"},
        "digits":           {"en": "Digits after comma",        "de": "Zeichen nach Komma",         "ru": "Знаков после запятой"},
        "is_comma":         {"en": "Divider comma",             "de": "Komma als Trennung",         "ru": "Запятая-разделитель"},
        "html_prepend":     {"en": "Prepend value",             "de": "Voranstellen HTML",          "ru": "Префикс значения"},
        "html_append_singular": {
            "en" : "Append to value (Singular)",
            "de": "HTML anhängen (Singular)",
            "ru": "Суффикс значения(един.ч.)"
        },
        "html_append_plural": {
            "en" : "Append to value (Plural)",
            "de": "HTML anhängen(Plural)",
            "ru": "Суффикс значения(множ.ч.)"
        },
        "group_html":       {"en": "html",                      "de": "Html",                       "ru": "HTML"},
        "group_color":      {"en": "color",                     "de": "Farbe",                      "ru": "Цвет"},

        /**
         * tplJustgageJustGage
         */
        "min_oid":          {"en": "min",                       "de": "min",                        "ru": "мин"},
        "mid_oid":          {"en": "mid",                       "de": "mid",                        "ru": "середина"},
        "max_oid":          {"en": "max",                       "de": "max",                        "ru": "макс"},
        "group_value":      {"en": "value",                     "de": "Wert",                       "ru": "Значение"},
        "hideValue":        {"en": "hide value",                "de": "verstecke Wert",             "ru": "Скрыть значение"},
        "unit":             {"en": "unit",                      "de": "Einheit",                    "ru": "Единицы"},
        "valueFontColor":   {"en": "color",                     "de": "Farbe",                      "ru": "Цвет"},
        "valueFontFamily":  {"en": "font-family",               "de": "Schriftfamilie",             "ru": "font-family"},
        "valueOffsetY":     {"en": "Offset Y",                  "de": "Versatz Y",                  "ru": "Сдвиг по Y"},
        "group_title1":     {"en": "title",                     "de": "Titel",                      "ru": "Название"},
        "titleFontColor":   {"en": "color",                     "de": "Farbe",                      "ru": "Цвет"},
        "titleFontFamily":  {"en": "font-family",               "de": "Schriftfamilie",             "ru": "font-family"},
        "titleBelow":       {"en": "title below",               "de": "Titel unten",                "ru": "Название знизу"},
        "titleOffsetY":     {"en": "Offset Y",                  "de": "Versatz Y",                  "ru": "Сдвиг по Y"},
        "group_label":      {"en": "label",                     "de": "Beschriftung",               "ru": "Подпись"},
        "label_oid":        {"en": "label",                     "de": "Beschriftung",               "ru": "Подпись"},
        "labelFontColor":   {"en": "color",                     "de": "Farbe",                      "ru": "Цвет"},
        "labelFontFamily":  {"en": "font-family",               "de": "Schriftfamilie",             "ru": "font-family"},
        "labelOffsetY":     {"en": "Offset Y",                  "de": "Versatz Y",                  "ru": "Сдвиг по Y"},
        "group_pointer":    {"en": "pointer",                   "de": "Zeiger",                     "ru": "Стрелка"},
        "pointer":          {"en": "show pointer",              "de": "zeige Zeiger",               "ru": "Показать стрелку"},
        "pointerMid":       {"en": "show mid",                  "de": "zeige Mitte",                "ru": "Показать середину"},
        "pointerColor":     {"en": "color",                     "de": "Farbe",                      "ru": "Цвет"},
        "pointerOptions":   {"en": "pointerOptions",            "de": "pointerOptions",             "ru": "pointerOptions"},
        "hideInnerShadow":  {"en": "hide shadow",               "de": "verstecke Schatten",         "ru": "Скрыть тень"},
        "shadowOpacity":    {"en": "shadowOpacity",             "de": "shadowOpacity",              "ru": "Прозрачность тени"},
        "shadowSize":       {"en": "shadowSize",                "de": "shadowSize",                 "ru": "Размер тени"},
        "shadowVerticalOffset": {"en": "shadowVerticalOffset",  "de": "shadowVerticalOffset",       "ru": "Сдвиг тени"},
        "group_layout":     {"en": "layout",                    "de": "Layout",                     "ru": "Расположение"},
        "hideMinMax":       {"en": "hide min/max",              "de": "verstecke min/max",          "ru": "Скрыть min/max"},
        "donut":            {"en": "donut",                     "de": "donut",                      "ru": "Круг"},
        "donutStartAngle":  {"en": "donut start angle",         "de": "donut Startwinkel",          "ru": "Угол начала круга"},
        "gaugeColor":       {"en": "background color",          "de": "Hintergrundfarbe",           "ru": Цвет фона"},
        "gaugeWidthScale":  {"en": "gauge width %",             "de": "Gauge Breite %",             "ru": "Ширина шкалы %"},

        /**
         * tplJustgageIndicatorColored
         */
        "equalAfter":       {"en": "equal after",               "de": "gleichbleibend nach",        "ru": "не изменяемое после"},
        "group_text":       {"en": "text",                      "de": "Text",                       "ru": "Текст"},
        "up":               {"en": "up",                        "de": "hoch",                       "ru": "вверх"},
        "equal":            {"en": "equal",                     "de": "gleich",                     "ru": "равно"},
        "down":             {"en": "down",                      "de": "runter",                     "ru": "вниз"},



    });
}

// add translations for non-edit mode
$.extend(true, systemDictionary, {
    "Instance":  {"en": "Instance", "de": "Instanz", "ru": "Инстанция"}
});

// this code can be placed directly in justgage.html
vis.binds.justgage = {
    version: "0.2.2",
    showVersion: function () {
        if (vis.binds.justgage.version) {
            console.log('Version justgage: ' + vis.binds.justgage.version);
            vis.binds.justgage.version = null;
        }
    },
    createValueColored: function (widgetID, view, data, style) {
        var $div = $('#' + widgetID);
        // if nothing found => wait
        if (!$div.length) {
            return setTimeout(function () {
                vis.binds.justgage.createValueColored(widgetID, view, data, style);
            }, 100);
        }

        function textRenderer(value){
            var val = parseFloat(value);
            if (data.digits !== undefined && data.digits != '') val = val.toFixed(parseFloat(data.digits, 10));
            if (data.attr('is_comma')) {
                val = '' + val;
                val = val.replace('.', ',');
            }
            val += data.unit || "";
            return val;
        };

        var val = parseFloat(vis.states[data.oid + '.val'] || data.oid) || 0;
        var min = parseFloat(vis.states[data.min_oid + '.val'] || data.min_oid) || 0;
        var max = parseFloat(vis.states[data.max_oid + '.val'] || data.max_oid) || 100;
        var mid = parseFloat(vis.states[data.mid_oid + '.val'] || data.mid_oid) || 50;
        var colors = [
            {
                pct: 0,
                color: data.color1 || "#0000aa",
                pow: data.pow1 || 1
            },
            {
                pct: (clamp(mid,min,Math.max(min+1,max))-min) / (Math.max(min+1,max) - min),
                color: data.color2 || "#00aa00",
                pow: data.pow2 || 1,
            },
            {
                pct: 1.0,
                color: data.color3 || "#aa0000",
                pow: data.pow3 || 1,
            },
        ];

        var color,text;
        $div.html('<div class="justgage-valueColored" data-oid="'+data.oid+'"></div>');
        var $content = $('#'+widgetID+' .justgage-valueColored');
        function refresh(){
            colors[1].pct = (clamp(mid,min,Math.max(min+1,max))-min) / (Math.max(min+1,max) - min);
            color = getColorGrad(pctInterval(min,Math.max(min+1,max),clamp(val,min,max)), colors);
            text = data.html_prepend || "";
            text += '<span>' + textRenderer(val) + '</span>';
            text += parseFloat(textRenderer(val)) == 1 ? data.html_append_singular || "" : data.html_append_plural || "";
            $content.html(text).animate({color: color},700);
        };
        refresh();

        // subscribe on updates of value
        if (vis.states[data.oid + '.val']) {
            vis.states.bind(data.oid + '.val', function (e, newVal, oldVal) {
                val = parseFloat(newVal);
                refresh();
            });
        }
        // subscribe on updates of mid
        if (isNaN(parseFloat(data.mid_oid))) {
            vis.states.bind(data.mid_oid + '.val', function (e, newVal, oldVal) {
                mid = parseFloat(newVal);
                refresh();
            });
        }
        // subscribe on updates of min
        if (isNaN(parseFloat(data.min_oid))) {
            vis.states.bind(data.min_oid + '.val', function (e, newVal, oldVal) {
                min = parseFloat(newVal);
                refresh();
            });
        }
        // subscribe on updates of max
        if (isNaN(parseFloat(data.max_oid))) {
            vis.states.bind(data.max_oid + '.val', function (e, newVal, oldVal) {
                max = parseFloat(newVal);
                refresh();
            });
        }
    },

    createIndicatorColored: function (widgetID, view, data, style) {
        var $div = $('#' + widgetID);
        // if nothing found => wait
        if (!$div.length) {
            return setTimeout(function () {
                vis.binds.justgage.createIndicatorColored(widgetID, view, data, style);
            }, 100);
        }

        var val = parseFloat(vis.states[data.oid + '.val'] || data.oid) || 0;
        var min = parseFloat(vis.states[data.min_oid + '.val'] || data.min_oid) || 0;
        var max = parseFloat(vis.states[data.max_oid + '.val'] || data.max_oid) || 100;
        var mid = parseFloat(vis.states[data.mid_oid + '.val'] || data.mid_oid) || 50;
        var colors = [
            {
                pct: 0,
                color: data.color1 || "#0000aa",
                pow: data.pow1 || 1
            },
            {
                pct: (clamp(mid,min,Math.max(min+1,max))-min) / (Math.max(min+1,max) - min),
                color: data.color2 || "#00aa00",
                pow: data.pow2 || 1,
            },
            {
                pct: 1.0,
                color: data.color3 || "#aa0000",
                pow: data.pow3 || 1,
            },
        ];

        var color,text,ts,eqA;
        $div.html('<div class="justgage-indicatorColored" data-oid="'+data.oid+'" style="color:'+color+'"></div>');
        var $content = $('#'+widgetID+' .justgage-indicatorColored');
        ts = Date.now();
        eqA = parseFloat(data.equalAfter || 0)*1000;
        function refresh(refreshVal, direction){
            colors[1].pct = (clamp(mid,min,Math.max(min+1,max))-min) / (Math.max(min+1,max) - min);
            color = getColorGrad(pctInterval(min,Math.max(min+1,max),clamp(val,min,max)), colors);
            if(refreshVal){
                if (direction > 0) {
                    text = data.up || "↑";
                    ts = Date.now();
                }else if (direction < 0){
                    text = data.equal || "→"
                }else if (Date.now() - ts >= eqA){
                    text = data.down || "↓";
                }
                text += '<span>' + textRenderer(val) + '</span>';
                text += parseFloat(textRenderer(val)) == 1 ? data.html_append_singular || "" : data.html_append_plural || "";
                $content.html(text).animate({color: color},700);
            }else{
                $content.animate({color: color},700);
            }
        };
        refresh(true, 0);

        // subscribe on updates of value
        if (vis.states[data.oid + '.val']) {
            vis.states.bind(data.oid + '.val', function (e, newVal, oldVal) {
                val = parseFloat(newVal);
                refresh(true, newVal-oldVal);
            });
        }
        // subscribe on updates of mid
        if (isNaN(parseFloat(data.mid_oid))) {
            vis.states.bind(data.mid_oid + '.val', function (e, newVal, oldVal) {
                mid = parseFloat(newVal);
                refresh(false);
            });
        }
        // subscribe on updates of min
        if (isNaN(parseFloat(data.min_oid))) {
            vis.states.bind(data.min_oid + '.val', function (e, newVal, oldVal) {
                min = parseFloat(newVal);
                refresh(false);
            });
        }
        // subscribe on updates of max
        if (isNaN(parseFloat(data.max_oid))) {
            vis.states.bind(data.max_oid + '.val', function (e, newVal, oldVal) {
                max = parseFloat(newVal);
                refresh(false);
            });
        }
    },

    createJustGage: function (widgetID, view, data, style) {
        var $div = $('#' + widgetID);
        // if nothing found => wait
        if (!$div.length) {
            return setTimeout(function () {
                vis.binds.justgage.createJustGage(widgetID, view, data, style);
            }, 100);
        }

        function textRenderer(value){
            var val = parseFloat(value);
            if (data.digits !== undefined && data.digits != '') val = val.toFixed(parseFloat(data.digits, 10));
            if (data.attr('is_comma')) {
                val = '' + val;
                val = val.replace('.', ',');
            }
            val += data.unit || "";
            return val;
        };

        var val = parseFloat(vis.states[data.oid + '.val'] || data.oid) || 0;
        var min = parseFloat(vis.states[data.min_oid + '.val'] || data.min_oid) || 0;
        var max = parseFloat(vis.states[data.max_oid + '.val'] || data.max_oid) || 100;
        var mid = parseFloat(vis.states[data.mid_oid + '.val'] || data.mid_oid) || 50;
        var colors = [
            {
                pct: 0,
                color: data.color1 || "#0000aa",
                pow: data.pow1 || 1
            },
            {
                pct: (clamp(mid,min,Math.max(min+1,max))-min) / (Math.max(min+1,max) - min),
                color: data.color2 || "#00aa00",
                pow: data.pow2 || 1,
            },
            {
                pct: 1.0,
                color: data.color3 || "#aa0000",
                pow: data.pow3 || 1,
            },
        ];

        //justGage
        var pointerOptions, g;
        try{
            pointerOptions =  JSON.parse(data.pointerOptions);
        } catch(e) {
            pointerOptions = {
                toplength: -15,
                bottomlength: 10,
                bottomwidth: 12,
                color: data.pointerColor || '#8e8e93',
                stroke: data.gaugeColor || '#edebeb',
                stroke_width: 3,
                stroke_linecap: 'round'
            };
        }
        g = new JustGage({
            id: widgetID,
            textRenderer: textRenderer,
            value: val,
            min: min,
            max: Math.max(min+1,max),
            mid: clamp(mid,min,Math.max(min+1,max)),

            hideValue: data.hideValue || false,
            valueFontColor: data.valueFontColor || "#010101",
            valueFontFamily: data.valueFontFamily || "Arial",
            valueMinFontSize: 10,
            valueOffsetY: data.valueOffsetY || 0,

            title: data.title || "",
            titleFontColor: data.titleFontColor || '#999999',
            titleFontFamily: data.titleFontFamily || "sans-serif",
            titlePosition: data.titleBelow ? "below" : "above",
            titleOffsetY: data.titleOffsetY || 0,

            label: vis.states[data.label_oid + '.val'] || data.label_oid || "",
            labelFontColor: data.labelFontColor || '#b3b3b3',
            labelFontFamily: data.labelFontFamily || "Arial",
            labelOffsetY: data.labelOffsetY || 0,

            hideMinMax: data.hideMinMax || false,
            donut: data.donut || false,
            pointer: data.pointer || false,
            pointerMid: data.pointerMid || false,
            pointerOptions: pointerOptions,

            startAnimationTime: 0,
            refreshAnimationTime: 700,
            counter: false,

            gaugeColor: data.gaugeColor || "#ebebeb",
            levelColors: colors,
            gaugeWidthScale: data.gaugeWidthScale ? data.gaugeWidthScale/100 : 1.0,
            donutStartAngle: data.donutStartAngle || 90,

            shadowOpacity: parseFloat(data.shadowOpacity) || 0.2,
            shadowSize: parseInt(data.shadowSize) || 5,
            shadowVerticalOffset: parseInt(data.shadowVerticalOffset) || 3,
            hideInnerShadow: data.hideInnerShadow || false,
        });

        function refresh(){
            g.config.value = val;
            g.config.min = min;
            g.config.max = Math.max(min+1,max);
            g.config.mid = clamp(mid,min,Math.max(min+1,max));
            colors[1].pct = (clamp(mid,min,Math.max(min+1,max))-min) / (Math.max(min+1,max) - min);
            g.config.levelColors = colors;
            g.refresh(val);
        }

        // subscribe on updates of value
        if (vis.states[data.oid + '.val']) {
            vis.states.bind(data.oid + '.val', function (e, newVal, oldVal) {
                val = parseFloat(newVal);
                refresh();
            });
        }
        // subscribe on updates of mid
        if (isNaN(parseFloat(data.mid_oid))) {
            vis.states.bind(data.mid_oid + '.val', function (e, newVal, oldVal) {
                mid = parseFloat(newVal);
                refresh();
            });
        }
        // subscribe on updates of min
        if (isNaN(parseFloat(data.min_oid))) {
            vis.states.bind(data.min_oid + '.val', function (e, newVal, oldVal) {
                min = parseFloat(newVal);
                refresh();
            });
        }
        // subscribe on updates of max
        if (isNaN(parseFloat(data.max_oid))) {
            vis.states.bind(data.max_oid + '.val', function (e, newVal, oldVal) {
                max = parseFloat(newVal);
                refresh();
            });
        }
        // subscribe on updates of label
        if (isNaN(parseFloat(data.label_oid))) {
            vis.states.bind(data.label_oid + '.val', function (e, newVal, oldVal) {
                g.config.label = newVal;
                refresh();
            });
        }
    },
};

vis.binds.justgage.showVersion();

/** Get color for value */
function getColorGrad(pct, col) {
    var no, inc, colors, percentage, rval, gval, bval, lower, upper, range, rangePct, pctLower, pctUpper, color, pow;

    no = col.length;
    if (no === 1) return col[0];
    inc = 1 / (no - 1);
    colors = [];
    for (var i = 0; i < col.length; i++) {
        if (typeof col[i] === 'object'){
            percentage = col[i].pct ? col[i].pct : inc * i;
            pow = col[i].pow || 1;
            rval = parseInt((cutHex(col[i].color)).substring(0, 2), 16);
            gval = parseInt((cutHex(col[i].color)).substring(2, 4), 16);
            bval = parseInt((cutHex(col[i].color)).substring(4, 6), 16);
        }else{
            percentage =inc * i;
            pow = 1;
            rval = parseInt((cutHex(col[i])).substring(0, 2), 16);
            gval = parseInt((cutHex(col[i])).substring(2, 4), 16);
            bval = parseInt((cutHex(col[i])).substring(4, 6), 16);
        }
        colors[i] = {
            pct: percentage,
            pow: pow,
            color: {
                r: rval,
                g: gval,
                b: bval
            }
        };
    }

    if (pct === 0) {
        return 'rgb(' + [colors[0].color.r, colors[0].color.g, colors[0].color.b].join(',') + ')';
    }

    for (var j = 0; j < colors.length; j++) {
        if (pct <= colors[j].pct) {
            lower = colors[j - 1];
            upper = colors[j];
            range = upper.pct - lower.pct;
            rangePct = Math.pow((pct - lower.pct) / range,colors[j].pow/colors[j-1].pow);
            pctLower = 1 - rangePct;
            pctUpper = rangePct;
            color = {
                r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
                g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
                b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
            };
            return 'rgb(' + [color.r, color.g, color.b].join(',') + ')';
        }
    }

}
function cutHex(str) {
    return (str.charAt(0) == "#") ? str.substring(1, 7) : str;
}

//Helper Functions
function clamp( x, min, max ) {
    if(x<min){ return min; }
    if(x>max){ return max; }
    return x;
}

function pctInterval(min,max,val){
    var valClamp = clamp(val,min,max);
    return (valClamp-min) / (max-min);
}

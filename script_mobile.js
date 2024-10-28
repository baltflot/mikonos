(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"scrollBarColor":"#000000","menu":["this.TDVAuthor"],"vrPolyfillScale":0.96,"id":"rootPlayer","hash": "54d889ce9c998531d4b192b65cefbb5eefe36ca4a7841f8a5fb01797f8f26758", "definitions": [{"enterPointingToHorizon":true,"initialPosition":{"hfov":115,"pitch":2,"yaw":3.27,"class":"PanoramaCameraPosition"},"id":"panorama_DC578620_D32A_39CF_41BF_3B39CC6D9057_camera","class":"PanoramaCamera"},{"hfov":360,"vfov":180,"thumbnailUrl":"media/panorama_DDF0A71C_D326_27F7_41C1_F33100D82A68_t.jpg","label":trans('panorama_DDF0A71C_D326_27F7_41C1_F33100D82A68.label'),"id":"panorama_DDF0A71C_D326_27F7_41C1_F33100D82A68","adjacentPanoramas":[{"data":{"overlayID":"overlay_C207A751_D32A_2671_41C8_D1CED3827DFE"},"panorama":"this.panorama_DC578620_D32A_39CF_41BF_3B39CC6D9057","yaw":-173.93,"distance":21.67,"backwardYaw":0.98,"select":"this.overlay_C207A751_D32A_2671_41C8_D1CED3827DFE.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama"},{"data":{"overlayID":"overlay_51EC3805_7389_C823_41B4_C65AF5E847E1"},"panorama":"this.panorama_DE44D2D6_D326_FE73_41E9_F45351F36933","yaw":7.19,"distance":33.08,"backwardYaw":3.39,"select":"this.overlay_51EC3805_7389_C823_41B4_C65AF5E847E1.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama"}],"data":{"label":"1"},"overlays":["this.overlay_51EC3805_7389_C823_41B4_C65AF5E847E1","this.overlay_C207A751_D32A_2671_41C8_D1CED3827DFE"],"hfovMax":130,"cardboardMenu":"this.Menu_4F4AC447_4548_75D5_41BC_1A567C547CB0","class":"Panorama","frames":[{"cube":{"levels":[{"width":27648,"url":"media/panorama_DDF0A71C_D326_27F7_41C1_F33100D82A68_0/{face}/0/{row}_{column}.jpg","height":4608,"rowCount":9,"tags":"ondemand","colCount":54,"class":"TiledImageResourceLevel"},{"width":15360,"url":"media/panorama_DDF0A71C_D326_27F7_41C1_F33100D82A68_0/{face}/1/{row}_{column}.jpg","height":2560,"rowCount":5,"tags":"ondemand","colCount":30,"class":"TiledImageResourceLevel"},{"width":9216,"url":"media/panorama_DDF0A71C_D326_27F7_41C1_F33100D82A68_0/{face}/2/{row}_{column}.jpg","height":1536,"rowCount":3,"tags":"ondemand","colCount":18,"class":"TiledImageResourceLevel"},{"width":6144,"url":"media/panorama_DDF0A71C_D326_27F7_41C1_F33100D82A68_0/{face}/3/{row}_{column}.jpg","height":1024,"rowCount":2,"tags":"ondemand","colCount":12,"class":"TiledImageResourceLevel"},{"width":3072,"url":"media/panorama_DDF0A71C_D326_27F7_41C1_F33100D82A68_0/{face}/4/{row}_{column}.jpg","height":512,"rowCount":1,"tags":["ondemand","preload"],"colCount":6,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_DDF0A71C_D326_27F7_41C1_F33100D82A68_t.jpg","class":"CubicPanoramaFrame"}]},{"verticalAlign":"middle","id":"IconButton_78F17661_6188_831F_41C5_D05323306B82_mobile","data":{"name":"\u0432\u043d\u0438\u0437"},"transparencyActive":true,"propagateClick":false,"minHeight":1,"minWidth":1,"backgroundOpacity":0,"height":25,"width":25,"class":"IconButton","horizontalAlign":"center","iconURL":"skin/IconButton_78F17661_6188_831F_41C5_D05323306B82.png"},{"enterPointingToHorizon":true,"initialPosition":{"hfov":115,"pitch":-1.3,"yaw":3.85,"class":"PanoramaCameraPosition"},"id":"panorama_DE44D2D6_D326_FE73_41E9_F45351F36933_camera","class":"PanoramaCamera"},{"selectedFontColor":"#FFFFFF","opacity":0.4,"fontFamily":"Arial","distance":2,"rollOverBackgroundColor":"#000000","rollOverOpacity":0.8,"class":"Menu","children":["this.MenuItem_A92DF125_BDE7_E5EF_41DA_BC9C0CA5440C","this.MenuItem_A92DC125_BDE7_E5EF_41C8_840DE5474275","this.MenuItem_A92DD125_BDE7_E5EF_41E2_5330695A1FC3"],"label":trans('Menu_4F4AC447_4548_75D5_41BC_1A567C547CB0.label'),"fontColor":"#FFFFFF","backgroundColor":"#404040","selectedBackgroundColor":"#202020","rollOverFontColor":"#FFFFFF","id":"Menu_4F4AC447_4548_75D5_41BC_1A567C547CB0"},{"verticalAlign":"middle","id":"IconButton_78F6A9BF_6189_8163_41D0_BB865E015852_mobile","data":{"name":"\u0434\u0430\u043b\u044c\u0448\u0435"},"transparencyActive":true,"propagateClick":false,"minHeight":1,"minWidth":1,"backgroundOpacity":0,"height":25,"width":25,"class":"IconButton","horizontalAlign":"center","iconURL":"skin/IconButton_78F6A9BF_6189_8163_41D0_BB865E015852.png"},{"progressBarBackgroundColor":["#000000"],"surfaceReticleColor":"#FFFFFF","subtitlesTextShadowColor":"#000000","subtitlesFontFamily":"Arial","playbackBarBottom":5,"subtitlesBottom":50,"playbackBarBorderSize":0,"displayTooltipInSurfaceSelection":false,"data":{"name":"Main Viewer"},"subtitlesGap":0,"progressBackgroundColor":["#666666"],"playbackBarBackgroundColor":["#FFFFFF"],"subtitlesBackgroundColor":"#000000","progressBottom":0,"progressHeight":2,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeight":10,"progressBorderSize":0,"width":"100%","toolTipBorderColor":"#767676","toolTipShadowBlurRadius":1,"toolTipBorderRadius":1,"firstTransitionDuration":0,"toolTipFontSize":"6px","toolTipShadowColor":"#333333","progressBarBorderRadius":0,"playbackBarBackgroundOpacity":1,"progressBarBorderSize":0,"toolTipTextShadowBlurRadius":1,"subtitlesFontSize":"3vmin","playbackBarProgressBorderSize":0,"subtitlesEnabled":false,"progressBackgroundColorRatios":[0],"toolTipFontColor":"#606060","toolTipDisplayTime":5000,"playbackBarHeadWidth":6,"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"class":"ViewerArea","progressBorderRadius":0,"toolTipTextShadowColor":"#000000","subtitlesBorderColor":"#FFFFFF","subtitlesTextShadowHorizontalLength":1,"progressRight":0,"subtitlesBackgroundOpacity":0.2,"progressLeft":0,"subtitlesTextShadowOpacity":1,"playbackBarHeadShadowOpacity":0.7,"id":"MainViewer_mobile","toolTipOpacity":0,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesFontColor":"#FFFFFF","playbackBarHeadShadowBlurRadius":1.5,"progressBarBorderColor":"#000000","playbackBarLeft":0,"vrPointerColor":"#FFFFFF","vrPointerSelectionColor":"#FFFF00","progressBarBackgroundColorRatios":[0],"playbackBarHeadHeight":15,"playbackBarHeadShadowColor":"#000000","vrPointerSelectionTime":1800,"propagateClick":false,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","toolTipPaddingRight":3,"minHeight":25,"surfaceReticleOpacity":0.13,"playbackBarHeadBorderSize":0,"minWidth":50,"playbackBarProgressBorderColor":"#000000","toolTipBackgroundColor":"transparent","playbackBarHeadShadow":true,"toolTipFontFamily":"Arial","subtitlesTop":0,"progressBorderColor":"#000000","height":"100%","playbackBarHeadBorderRadius":0,"toolTipPaddingLeft":3,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesTextShadowVerticalLength":1,"playbackBarHeadBorderColor":"#000000"},{"hfov":360,"vfov":180,"thumbnailUrl":"media/panorama_DE44D2D6_D326_FE73_41E9_F45351F36933_t.jpg","label":trans('panorama_DE44D2D6_D326_FE73_41E9_F45351F36933.label'),"id":"panorama_DE44D2D6_D326_FE73_41E9_F45351F36933","adjacentPanoramas":[{"data":{"overlayID":"overlay_B20AB226_BDE2_67ED_4198_D96EA33B97EE"},"panorama":"this.panorama_DDF0A71C_D326_27F7_41C1_F33100D82A68","yaw":3.39,"distance":42.47,"backwardYaw":7.19,"select":"this.overlay_B20AB226_BDE2_67ED_4198_D96EA33B97EE.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama"}],"data":{"label":"3"},"overlays":["this.overlay_B20AB226_BDE2_67ED_4198_D96EA33B97EE"],"hfovMax":130,"cardboardMenu":"this.Menu_4F4AC447_4548_75D5_41BC_1A567C547CB0","class":"Panorama","frames":[{"cube":{"levels":[{"width":27648,"url":"media/panorama_DE44D2D6_D326_FE73_41E9_F45351F36933_0/{face}/0/{row}_{column}.jpg","height":4608,"rowCount":9,"tags":"ondemand","colCount":54,"class":"TiledImageResourceLevel"},{"width":15360,"url":"media/panorama_DE44D2D6_D326_FE73_41E9_F45351F36933_0/{face}/1/{row}_{column}.jpg","height":2560,"rowCount":5,"tags":"ondemand","colCount":30,"class":"TiledImageResourceLevel"},{"width":9216,"url":"media/panorama_DE44D2D6_D326_FE73_41E9_F45351F36933_0/{face}/2/{row}_{column}.jpg","height":1536,"rowCount":3,"tags":"ondemand","colCount":18,"class":"TiledImageResourceLevel"},{"width":6144,"url":"media/panorama_DE44D2D6_D326_FE73_41E9_F45351F36933_0/{face}/3/{row}_{column}.jpg","height":1024,"rowCount":2,"tags":"ondemand","colCount":12,"class":"TiledImageResourceLevel"},{"width":3072,"url":"media/panorama_DE44D2D6_D326_FE73_41E9_F45351F36933_0/{face}/4/{row}_{column}.jpg","height":512,"rowCount":1,"tags":["ondemand","preload"],"colCount":6,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_DE44D2D6_D326_FE73_41E9_F45351F36933_t.jpg","class":"CubicPanoramaFrame"}]},{"verticalAlign":"middle","id":"IconButton_6D2082A3_738B_D860_41C8_EB5A1BB5E262_mobile","data":{"name":"\u0432\u0432\u0435\u0440\u0445"},"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_DE1BA689_D372_EF8E_41C9_F30854BB0EA8, 6.828899857245379, 1.5237128669538609, 115 || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 0)","transparencyActive":true,"propagateClick":false,"minHeight":1,"minWidth":1,"backgroundOpacity":0,"height":35,"width":35,"class":"IconButton","horizontalAlign":"center","visible":false,"iconURL":"skin/IconButton_6D2082A3_738B_D860_41C8_EB5A1BB5E262.png"},{"cursor":"hand","overflow":"hidden","scrollBarColor":"#000000","verticalAlign":"middle","children":["this.Image_4D814365_6DA7_9B6B_41C9_F0948222EC93_mobile"],"id":"Container_72F51EB0_6DA5_8DE9_41D9_8FFA57FEA011_mobile","left":0,"scrollBarOpacity":0,"backgroundColor":["#CC0000"],"data":{"name":"Container16271"},"layout":"horizontal","propagateClick":false,"minHeight":1,"scrollBarWidth":5,"minWidth":1,"bottom":0,"gap":4,"backgroundOpacity":0.95,"height":40,"scrollBarMargin":0,"class":"Container","horizontalAlign":"center","width":40,"backgroundColorRatios":[1]},{"items":["this.PanoramaPlayListItem_DE1BA689_D372_EF8E_41C9_F30854BB0EA8",{"camera":"this.panorama_DE44D2D6_D326_FE73_41E9_F45351F36933_camera","media":"this.panorama_DE44D2D6_D326_FE73_41E9_F45351F36933","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","player":"this.MainViewer_mobilePanoramaPlayer","class":"PanoramaPlayListItem"},{"camera":"this.panorama_DC578620_D32A_39CF_41BF_3B39CC6D9057_camera","media":"this.panorama_DC578620_D32A_39CF_41BF_3B39CC6D9057","end":"this.trigger('tourEnded')","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)","player":"this.MainViewer_mobilePanoramaPlayer","class":"PanoramaPlayListItem"}],"id":"mainPlayList","class":"PlayList"},{"hfov":360,"vfov":180,"thumbnailUrl":"media/panorama_DC578620_D32A_39CF_41BF_3B39CC6D9057_t.jpg","label":trans('panorama_DC578620_D32A_39CF_41BF_3B39CC6D9057.label'),"id":"panorama_DC578620_D32A_39CF_41BF_3B39CC6D9057","adjacentPanoramas":[{"data":{"overlayID":"overlay_B21B1A1C_BDE2_E7DD_41B1_FF0C2A084A9E"},"panorama":"this.panorama_DDF0A71C_D326_27F7_41C1_F33100D82A68","yaw":0.98,"distance":4.82,"backwardYaw":-173.93,"select":"this.overlay_B21B1A1C_BDE2_E7DD_41B1_FF0C2A084A9E.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama"}],"data":{"label":"2"},"overlays":["this.overlay_B21B1A1C_BDE2_E7DD_41B1_FF0C2A084A9E","this.overlay_C62C0BC3_D32E_2E50_41D0_D0ABA0FB7C1B"],"hfovMax":130,"cardboardMenu":"this.Menu_4F4AC447_4548_75D5_41BC_1A567C547CB0","class":"Panorama","frames":[{"cube":{"levels":[{"width":27648,"url":"media/panorama_DC578620_D32A_39CF_41BF_3B39CC6D9057_0/{face}/0/{row}_{column}.jpg","height":4608,"rowCount":9,"tags":"ondemand","colCount":54,"class":"TiledImageResourceLevel"},{"width":15360,"url":"media/panorama_DC578620_D32A_39CF_41BF_3B39CC6D9057_0/{face}/1/{row}_{column}.jpg","height":2560,"rowCount":5,"tags":"ondemand","colCount":30,"class":"TiledImageResourceLevel"},{"width":9216,"url":"media/panorama_DC578620_D32A_39CF_41BF_3B39CC6D9057_0/{face}/2/{row}_{column}.jpg","height":1536,"rowCount":3,"tags":"ondemand","colCount":18,"class":"TiledImageResourceLevel"},{"width":6144,"url":"media/panorama_DC578620_D32A_39CF_41BF_3B39CC6D9057_0/{face}/3/{row}_{column}.jpg","height":1024,"rowCount":2,"tags":"ondemand","colCount":12,"class":"TiledImageResourceLevel"},{"width":3072,"url":"media/panorama_DC578620_D32A_39CF_41BF_3B39CC6D9057_0/{face}/4/{row}_{column}.jpg","height":512,"rowCount":1,"tags":["ondemand","preload"],"colCount":6,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_DC578620_D32A_39CF_41BF_3B39CC6D9057_t.jpg","class":"CubicPanoramaFrame"}]},{"enterPointingToHorizon":true,"initialPosition":{"hfov":115,"pitch":1.52,"yaw":6.83,"class":"PanoramaCameraPosition"},"id":"panorama_DDF0A71C_D326_27F7_41C1_F33100D82A68_camera","class":"PanoramaCamera"},{"items":[{"camera":"this.panorama_DDF0A71C_D326_27F7_41C1_F33100D82A68_camera","media":"this.panorama_DDF0A71C_D326_27F7_41C1_F33100D82A68","player":"this.MainViewer_mobilePanoramaPlayer","class":"PanoramaPlayListItem"},{"camera":"this.panorama_DE44D2D6_D326_FE73_41E9_F45351F36933_camera","media":"this.panorama_DE44D2D6_D326_FE73_41E9_F45351F36933","player":"this.MainViewer_mobilePanoramaPlayer","class":"PanoramaPlayListItem"},{"camera":"this.panorama_DC578620_D32A_39CF_41BF_3B39CC6D9057_camera","media":"this.panorama_DC578620_D32A_39CF_41BF_3B39CC6D9057","player":"this.MainViewer_mobilePanoramaPlayer","class":"PanoramaPlayListItem"}],"id":"ThumbnailList_F5A2D2AF_E492_7D4C_41EA_F1E1DE7BAB4A_mobile_playlist","class":"PlayList"},{"arrowKeysAction":"translate","buttonMoveRight":"this.IconButton_78FBA8EE_6189_80E5_4177_A05F0D7CC7B4_mobile","mouseControlMode":"drag_rotation","viewerArea":"this.MainViewer_mobile","buttonMoveUp":"this.IconButton_78EBFC83_6188_8723_41C1_589BA6DE7DE7_mobile","surfaceSelectionVerticalAngle":61.2,"buttonMoveLeft":"this.IconButton_7B1378A5_618B_8F67_41BF_0EF686E02086_mobile","class":"PanoramaPlayer","buttonZoomOut":"this.IconButton_78F6A9BF_6189_8163_41D0_BB865E015852_mobile","surfaceSelectionHorizontalAngle":30.6,"buttonMoveDown":"this.IconButton_78F17661_6188_831F_41C5_D05323306B82_mobile","displayPlaybackBar":true,"surfaceSelectionEnabled":true,"aaEnabled":true,"buttonZoomIn":"this.IconButton_7B436E8B_6188_832C_41C6_0739489BE4BF_mobile","touchControlMode":"drag_rotation","id":"MainViewer_mobilePanoramaPlayer"},{"scaleMode":"fit_inside","verticalAlign":"middle","id":"Image_791C96B5_6D5C_9DEB_41D3_A45DCA34CDF5_mobile","data":{"name":"Image11314"},"right":4.89,"url":trans('Image_791C96B5_6D5C_9DEB_41D3_A45DCA34CDF5_mobile.url'),"propagateClick":false,"minHeight":1,"minWidth":1,"bottom":1.5,"backgroundOpacity":0,"height":30,"class":"Image","horizontalAlign":"center","width":60,"visible":false,"cursor":"hand"},{"verticalAlign":"middle","id":"IconButton_78FBA8EE_6189_80E5_4177_A05F0D7CC7B4_mobile","data":{"name":"\u043f\u0440\u0430\u0432\u043e"},"transparencyActive":true,"propagateClick":false,"minHeight":1,"minWidth":1,"backgroundOpacity":0,"height":25,"width":25,"class":"IconButton","horizontalAlign":"center","iconURL":"skin/IconButton_78FBA8EE_6189_80E5_4177_A05F0D7CC7B4.png"},{"verticalAlign":"middle","id":"IconButton_78EBFC83_6188_8723_41C1_589BA6DE7DE7_mobile","data":{"name":"\u0432\u0432\u0435\u0440\u0445"},"transparencyActive":true,"propagateClick":false,"minHeight":1,"minWidth":1,"backgroundOpacity":0,"height":25,"width":25,"class":"IconButton","horizontalAlign":"center","iconURL":"skin/IconButton_78EBFC83_6188_8723_41C1_589BA6DE7DE7.png"},{"scrollBarColor":"#000000","verticalAlign":"middle","id":"Container_6D25C29F_738B_D85F_41D6_42C675A272BF_mobile","left":0,"scrollBarOpacity":0,"data":{"name":"\u043a\u043d\u043e\u043f\u043a\u0438 \u042d\u0422\u0410\u0416\u0418"},"right":0,"layout":"horizontal","minHeight":1,"scrollBarWidth":5,"minWidth":1,"gap":4,"bottom":40,"backgroundOpacity":0,"height":40,"scrollBarMargin":1,"class":"Container","horizontalAlign":"center","visible":false,"overflow":"hidden","children":["this.IconButton_6D2082A3_738B_D860_41C8_EB5A1BB5E262_mobile","this.IconButton_6D92F607_7388_5820_41CD_2DF7F54AEC52_mobile"]},{"verticalAlign":"middle","id":"IconButton_7B436E8B_6188_832C_41C6_0739489BE4BF_mobile","data":{"name":"\u0431\u043b\u0438\u0436\u0435"},"transparencyActive":true,"propagateClick":false,"minHeight":1,"minWidth":1,"backgroundOpacity":0,"height":25,"width":25,"class":"IconButton","horizontalAlign":"center","iconURL":"skin/IconButton_7B436E8B_6188_832C_41C6_0739489BE4BF.png"},{"verticalAlign":"middle","id":"Image_4D814365_6DA7_9B6B_41C9_F0948222EC93_mobile","data":{"name":"Image16028"},"scaleMode":"fit_inside","click":"this.toggleVR()","url":trans('Image_4D814365_6DA7_9B6B_41C9_F0948222EC93_mobile.url'),"propagateClick":false,"minHeight":1,"minWidth":1,"backgroundOpacity":0,"height":20,"width":20,"class":"Image","horizontalAlign":"center","cursor":"hand"},{"itemLabelFontSize":7,"itemThumbnailBorderSize":0,"itemLabelTextDecoration":"none","itemThumbnailWidth":94,"itemBackgroundColorDirection":"vertical","left":"0%","itemLabelFontStyle":"normal","itemMode":"thumbnail-only","rollOverItemBackgroundOpacity":0,"width":"100%","itemThumbnailOpacity":1,"itemLabelFontFamily":"Arial","itemLabelFontColor":"#FFFFFF","itemPaddingTop":3,"toolTipBorderColor":"#767676","selectedItemLabelFontColor":"#FFCC00","toolTipShadowBlurRadius":1,"toolTipShadowColor":"#333333","toolTipBorderRadius":1,"scrollBarWidth":2,"itemLabelFontWeight":"normal","toolTipTextShadowBlurRadius":1,"data":{"name":"ThumbnailList35762"},"toolTipFontSize":6,"backgroundOpacity":0.04,"selectedItemLabelFontWeight":"bold","itemBackgroundOpacity":0,"horizontalAlign":"center","toolTipFontColor":"#606060","toolTipDisplayTime":5000,"class":"ThumbnailList","backgroundColorRatios":[0],"toolTipTextShadowColor":"#000000","itemBackgroundColorRatios":[],"paddingLeft":5,"paddingRight":5,"itemThumbnailShadowBlurRadius":8,"rollOverItemLabelFontWeight":"normal","itemPaddingRight":3,"id":"ThumbnailList_F5A2D2AF_E492_7D4C_41EA_F1E1DE7BAB4A_mobile","scrollBarOpacity":0.3,"backgroundColor":["#000000"],"itemBackgroundColor":[],"itemThumbnailBorderRadius":21,"playList":"this.ThumbnailList_F5A2D2AF_E492_7D4C_41EA_F1E1DE7BAB4A_mobile_playlist","layout":"horizontal","itemLabelGap":0,"itemThumbnailShadow":false,"propagateClick":false,"scrollBarColor":"#FFFFFF","itemThumbnailShadowSpread":1,"toolTipPaddingRight":3,"minHeight":10,"itemThumbnailShadowColor":"#000000","minWidth":10,"toolTipBackgroundColor":"#F6F6F6","top":"0%","itemThumbnailShadowOpacity":0.16,"itemPaddingBottom":3,"height":102.65,"itemBorderRadius":0,"itemThumbnailHeight":70,"scrollBarMargin":0.5,"toolTipFontFamily":"Arial","toolTipPaddingLeft":3,"itemPaddingLeft":3,"itemThumbnailScaleMode":"fit_outside","rollOverItemThumbnailShadow":false},{"scrollBarColor":"#000000","verticalAlign":"middle","id":"Container_7B625D2A_6188_816C_41AE_DCFD6A81FF65_mobile","left":0,"scrollBarOpacity":0,"data":{"name":"\u043a\u043d\u043e\u043f\u043a\u0438 \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438"},"right":0,"layout":"horizontal","minHeight":1,"scrollBarWidth":5,"minWidth":1,"gap":4,"bottom":0,"backgroundOpacity":0,"height":40,"scrollBarMargin":1,"class":"Container","horizontalAlign":"center","overflow":"hidden","children":["this.IconButton_7B1378A5_618B_8F67_41BF_0EF686E02086_mobile","this.IconButton_78FBA8EE_6189_80E5_4177_A05F0D7CC7B4_mobile","this.IconButton_78EBFC83_6188_8723_41C1_589BA6DE7DE7_mobile","this.IconButton_78F17661_6188_831F_41C5_D05323306B82_mobile","this.IconButton_7B436E8B_6188_832C_41C6_0739489BE4BF_mobile","this.IconButton_78F6A9BF_6189_8163_41D0_BB865E015852_mobile","this.IconButton_7A221EAE_61B8_8364_41BE_A1A122EC1529_mobile"]},{"verticalAlign":"middle","id":"IconButton_6D92F607_7388_5820_41CD_2DF7F54AEC52_mobile","data":{"name":"\u0432\u043d\u0438\u0437"},"transparencyActive":true,"propagateClick":false,"minHeight":1,"minWidth":1,"backgroundOpacity":0,"height":35,"width":35,"class":"IconButton","horizontalAlign":"center","iconURL":"skin/IconButton_6D92F607_7388_5820_41CD_2DF7F54AEC52.png"},{"verticalAlign":"middle","id":"IconButton_7A221EAE_61B8_8364_41BE_A1A122EC1529_mobile","data":{"name":"vr"},"click":"this.set('fullscreenEnabled', true); this.set('fullscreenEnabled', false)","transparencyActive":true,"propagateClick":false,"minHeight":1,"minWidth":1,"backgroundOpacity":0,"height":25,"width":25,"class":"IconButton","horizontalAlign":"center","iconURL":"skin/IconButton_7A221EAE_61B8_8364_41BE_A1A122EC1529.png"},{"verticalAlign":"middle","id":"IconButton_7B1378A5_618B_8F67_41BF_0EF686E02086_mobile","data":{"name":"\u043b\u0435\u0432\u043e"},"transparencyActive":true,"minHeight":1,"minWidth":1,"backgroundOpacity":0,"height":25,"width":25,"class":"IconButton","horizontalAlign":"center","iconURL":"skin/IconButton_7B1378A5_618B_8F67_41BF_0EF686E02086.png"},{"label":trans('TDVAuthor.label'),"id":"TDVAuthor","class":"PlayerMenuItem"},{"data":{"label":"spot0","hasPanoramaAction":true},"items":[{"pitch":-2.93,"offsetY":22.5,"yaw":7.19,"height":45,"image":"this.res_57CE420E_738B_D821_41A0_94D5D57E8CE6","width":45,"class":"FlatHotspotPanoramaOverlayImage","scaleMode":"fit_inside","data":{"label":"spot0"},"offsetX":22.5}],"enabledInCardboard":true,"class":"FlatHotspotPanoramaOverlay","useHandCursor":true,"maps":[],"id":"overlay_51EC3805_7389_C823_41B4_C65AF5E847E1","areas":["this.FlatHotspotPanoramaOverlayArea_51E5E818_7389_C821_41D2_497FA04A1B69"]},{"data":{"label":"spot0","hasPanoramaAction":true},"items":[{"pitch":-4.48,"offsetY":22.5,"yaw":-173.93,"height":45,"image":"this.res_57CE420E_738B_D821_41A0_94D5D57E8CE6","width":45,"class":"FlatHotspotPanoramaOverlayImage","scaleMode":"fit_inside","data":{"label":"spot0"},"offsetX":22.5}],"enabledInCardboard":true,"class":"FlatHotspotPanoramaOverlay","useHandCursor":true,"maps":[],"id":"overlay_C207A751_D32A_2671_41C8_D1CED3827DFE","areas":["this.FlatHotspotPanoramaOverlayArea_C2073752_D32A_2673_41DA_C1D73EB9AB5E"]},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","label":trans('MenuItem_A92DF125_BDE7_E5EF_41DA_BC9C0CA5440C.label'),"id":"MenuItem_A92DF125_BDE7_E5EF_41DA_BC9C0CA5440C","class":"MenuItem"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","label":trans('MenuItem_A92DC125_BDE7_E5EF_41C8_840DE5474275.label'),"id":"MenuItem_A92DC125_BDE7_E5EF_41C8_840DE5474275","class":"MenuItem"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","label":trans('MenuItem_A92DD125_BDE7_E5EF_41E2_5330695A1FC3.label'),"id":"MenuItem_A92DD125_BDE7_E5EF_41E2_5330695A1FC3","class":"MenuItem"},{"data":{"label":"spot0","hasPanoramaAction":true},"items":[{"pitch":-2.28,"offsetY":22.5,"yaw":3.39,"height":45,"image":"this.res_57CE420E_738B_D821_41A0_94D5D57E8CE6","width":45,"class":"FlatHotspotPanoramaOverlayImage","scaleMode":"fit_inside","data":{"label":"spot0"},"offsetX":22.5}],"enabledInCardboard":true,"class":"FlatHotspotPanoramaOverlay","useHandCursor":true,"maps":[],"id":"overlay_B20AB226_BDE2_67ED_4198_D96EA33B97EE","areas":["this.FlatHotspotPanoramaOverlayArea_B20BB228_BDE2_67E5_41CF_41E549ADFA9E"]},{"camera":"this.panorama_DDF0A71C_D326_27F7_41C1_F33100D82A68_camera","media":"this.panorama_DDF0A71C_D326_27F7_41C1_F33100D82A68","player":"this.MainViewer_mobilePanoramaPlayer","id":"PanoramaPlayListItem_DE1BA689_D372_EF8E_41C9_F30854BB0EA8","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","class":"PanoramaPlayListItem"},{"data":{"label":"spot0","hasPanoramaAction":true},"items":[{"pitch":-19.42,"offsetY":22.5,"yaw":0.98,"height":45,"image":"this.res_57CE420E_738B_D821_41A0_94D5D57E8CE6","width":45,"class":"FlatHotspotPanoramaOverlayImage","scaleMode":"fit_inside","data":{"label":"spot0"},"offsetX":22.5}],"enabledInCardboard":true,"class":"FlatHotspotPanoramaOverlay","useHandCursor":true,"maps":[],"id":"overlay_B21B1A1C_BDE2_E7DD_41B1_FF0C2A084A9E","areas":["this.FlatHotspotPanoramaOverlayArea_B2187A1E_BDE2_E7DD_41E3_FDE9D77073E5"]},{"pitch":12.83,"bleaching":0.7,"yaw":166.53,"id":"overlay_C62C0BC3_D32E_2E50_41D0_D0ABA0FB7C1B","class":"LensFlarePanoramaOverlay"},{"levels":[{"width":90,"url":"media/res_57CE420E_738B_D821_41A0_94D5D57E8CE6_0.png","height":90,"class":"ImageResourceLevel"}],"id":"res_57CE420E_738B_D821_41A0_94D5D57E8CE6","class":"ImageResource"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","displayTooltipInTouchScreens":true,"mapColor":"any","id":"FlatHotspotPanoramaOverlayArea_51E5E818_7389_C821_41D2_497FA04A1B69","class":"FlatHotspotPanoramaOverlayArea"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","displayTooltipInTouchScreens":true,"mapColor":"any","id":"FlatHotspotPanoramaOverlayArea_C2073752_D32A_2673_41DA_C1D73EB9AB5E","class":"FlatHotspotPanoramaOverlayArea"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","displayTooltipInTouchScreens":true,"mapColor":"any","id":"FlatHotspotPanoramaOverlayArea_B20BB228_BDE2_67E5_41CF_41E549ADFA9E","class":"FlatHotspotPanoramaOverlayArea"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","displayTooltipInTouchScreens":true,"mapColor":"any","id":"FlatHotspotPanoramaOverlayArea_B2187A1E_BDE2_E7DD_41E3_FDE9D77073E5","class":"FlatHotspotPanoramaOverlayArea"}],"data":{"locales":{"ru":"locale/ru.txt"},"initialScale":0.5,"defaultLocale":"ru","textToSpeechConfig":{"pitch":1,"speechOnQuizQuestion":false,"rate":1,"volume":1,"speechOnTooltip":false,"stopBackgroundAudio":false,"speechOnInfoWindow":false},"surfaceSelectionHotspotMode":"hotspotEnabled","name":"Player18403","displayTooltipInTouchScreens":true,"history":{}},"backgroundColor":["#000000"],"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_F5A2D2AF_E492_7D4C_41EA_F1E1DE7BAB4A_mobile_playlist]); this.syncPlaylists([this.ThumbnailList_F5A2D2AF_E492_7D4C_41EA_F1E1DE7BAB4A_mobile_playlist,this.mainPlayList])","defaultVRPointer":"gaze","left":447.5,"scripts":{"playAudioList":TDV.Tour.Script.playAudioList,"initAnalytics":TDV.Tour.Script.initAnalytics,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"downloadFile":TDV.Tour.Script.downloadFile,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"openLink":TDV.Tour.Script.openLink,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"clone":TDV.Tour.Script.clone,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setValue":TDV.Tour.Script.setValue,"quizShowScore":TDV.Tour.Script.quizShowScore,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"isPanorama":TDV.Tour.Script.isPanorama,"showPopupImage":TDV.Tour.Script.showPopupImage,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"unregisterKey":TDV.Tour.Script.unregisterKey,"registerKey":TDV.Tour.Script.registerKey,"getPixels":TDV.Tour.Script.getPixels,"quizStart":TDV.Tour.Script.quizStart,"historyGoBack":TDV.Tour.Script.historyGoBack,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"historyGoForward":TDV.Tour.Script.historyGoForward,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"quizFinish":TDV.Tour.Script.quizFinish,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"existsKey":TDV.Tour.Script.existsKey,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"shareSocial":TDV.Tour.Script.shareSocial,"getMainViewer":TDV.Tour.Script.getMainViewer,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"textToSpeech":TDV.Tour.Script.textToSpeech,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"toggleVR":TDV.Tour.Script.toggleVR,"getComponentByName":TDV.Tour.Script.getComponentByName,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"disableVR":TDV.Tour.Script.disableVR,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"cloneBindings":TDV.Tour.Script.cloneBindings,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"init":TDV.Tour.Script.init,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setMapLocation":TDV.Tour.Script.setMapLocation,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"startMeasurement":TDV.Tour.Script.startMeasurement,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getKey":TDV.Tour.Script.getKey,"resumePlayers":TDV.Tour.Script.resumePlayers,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"createTween":TDV.Tour.Script.createTween,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"enableVR":TDV.Tour.Script.enableVR,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"initQuiz":TDV.Tour.Script.initQuiz,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"executeJS":TDV.Tour.Script.executeJS,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getMediaByName":TDV.Tour.Script.getMediaByName,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"mixObject":TDV.Tour.Script.mixObject,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"showWindow":TDV.Tour.Script.showWindow,"getOverlays":TDV.Tour.Script.getOverlays,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"translate":TDV.Tour.Script.translate,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setLocale":TDV.Tour.Script.setLocale,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay},"watermark":false,"layout":"absolute","propagateClick":false,"children":["this.MainViewer_mobile","this.Container_7B625D2A_6188_816C_41AE_DCFD6A81FF65_mobile","this.Container_6D25C29F_738B_D85F_41D6_42C675A272BF_mobile","this.ThumbnailList_F5A2D2AF_E492_7D4C_41EA_F1E1DE7BAB4A_mobile","this.Image_791C96B5_6D5C_9DEB_41D3_A45DCA34CDF5_mobile","this.Container_72F51EB0_6DA5_8DE9_41D9_8FFA57FEA011_mobile"],"defaultMenu":["fullscreen","mute","rotation"],"minHeight":20,"minWidth":20,"gap":10,"height":"100%","scrollBarMargin":2,"class":"Player","width":"100%","backgroundColorRatios":[0]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2024.0.18.js.map
})();
//Generated with v2024.0.18, Mon Oct 28 2024
// 文件路径
let baseUrl = '/static/component/right-sidebar/'

// 导航栏html
let sidebar_html = '<div class="right-sidebar-ico" id="right-sidebar-ico">\n' +
    '    <img src="static/component/right-sidebar/images/homeico.png">\n' +
    '</div>\n' +
    '<div class="right-sidebar" style="display: none;">\n' +
    '    <div class="main-sidebar">\n' +
    '        <div class="sidebar-close" id="sidebar-close">\n' +
    '            <img src="static/component/right-sidebar/images/closeico.png">\n' +
    '        </div>\n' +
    '        <div class="sidebar-logo">\n' +
    '            <img src="static/component/right-sidebar/images/right-sidebar-logo.png">\n' +
    '        </div>\n' +
    '        <div class="main-sidebar-button">\n' +
    '            项目背景\n' +
    '        </div>\n' +
    '        <div class="main-sidebar-button">\n' +
    '            设计策略\n' +
    '        </div>\n' +
    '        <div class="main-sidebar-button">\n' +
    '            设计成果\n' +
    '        </div>\n' +
    '        <div class="main-sidebar-button">\n' +
    '            产品图纸\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="secondary-sidebar">\n' +
    '        <div class="secondary-button-group">\n' +
    '            <div class="secondary-button">\n' +
    '                <a href="javascript:void(0)">\n' +
    '                    鸟瞰图\n' +
    '                </a>\n' +
    '            </div>\n' +
    '            <div class="secondary-button">\n' +
    '                <a href="javascript:void(0)">\n' +
    '                    平台透视图\n' +
    '                </a>\n' +
    '            </div>\n' +
    '            <div class="secondary-button">\n' +
    '                <a href="javascript:void(0)">\n' +
    '                    平台半鸟瞰图\n' +
    '                </a>\n' +
    '            </div>\n' +
    '            <div class="secondary-button">\n' +
    '                <a href="javascript:void(0)">\n' +
    '                    整体鸟瞰图\n' +
    '                </a>\n' +
    '            </div>\n' +
    '            <div class="secondary-button">\n' +
    '                <a href="javascript:void(0)">\n' +
    '                    规划总平面\n' +
    '                </a>\n' +
    '            </div>\n' +
    '            <div class="secondary-button">\n' +
    '                <a href="javascript:void(0)">\n' +
    '                    指标表\n' +
    '                </a>\n' +
    '            </div>\n' +
    '            <div class="secondary-button">\n' +
    '                <a href="javascript:void(0)">\n' +
    '                    B区放大总平面\n' +
    '                </a>\n' +
    '            </div>\n' +
    '            <div class="secondary-button">\n' +
    '                <a href="javascript:void(0)">\n' +
    '                    分期规划\n' +
    '                </a>\n' +
    '            </div>\n' +
    '            <div class="secondary-button">\n' +
    '                <a href="javascript:void(0)">\n' +
    '                    围合院落\n' +
    '                </a>\n' +
    '            </div>\n' +
    '            <div class="secondary-button">\n' +
    '                <a href="javascript:void(0)">\n' +
    '                    土方节省\n' +
    '                </a>\n' +
    '            </div>\n' +
    '            <div class="secondary-button">\n' +
    '                <a href="javascript:void(0)">\n' +
    '                    设计核心\n' +
    '                </a>\n' +
    '            </div>\n' +
    '            <div class="secondary-button">\n' +
    '                <a href="javascript:void(0)">\n' +
    '                    户型分析\n' +
    '                </a>\n' +
    '            </div>\n' +
    '            <div class="secondary-button">\n' +
    '                <a href="javascript:void(0)">\n' +
    '                    采光同风\n' +
    '                </a>\n' +
    '            </div>\n' +
    '            <div class="secondary-button">\n' +
    '                <a href="javascript:void(0)">\n' +
    '                    回归生活\n' +
    '                </a>\n' +
    '            </div>\n' +
    '            <div class="secondary-button">\n' +
    '                <a href="javascript:void(0)">\n' +
    '                    产品参数\n' +
    '                </a>\n' +
    '            </div>\n' +
    '            <div class="secondary-button">\n' +
    '                <a href="javascript:void(0)">\n' +
    '                    功能分析图\n' +
    '                </a>\n' +
    '            </div>\n' +
    '            <div class="secondary-button">\n' +
    '                <a href="javascript:void(0)">\n' +
    '                    土方节省\n' +
    '                </a>\n' +
    '            </div>\n' +
    '            <div class="secondary-button">\n' +
    '                <a href="javascript:void(0)">\n' +
    '                    景观分析\n' +
    '                </a>\n' +
    '            </div>\n' +
    '            <div class="secondary-button">\n' +
    '                <a href="javascript:void(0)">\n' +
    '                    土方节省\n' +
    '                </a>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>'

// 为页面添加侧边栏,只需要在页面中声明<div class="right-sidebar" id="right-sidebar></div>,自动往该标签中添加元素
$(".right-sidebar-component").html(sidebar_html);

// 导航栏样式
$("head").append("<link>");
css = $("head").children(":last");
css.attr({
    rel: "stylesheet",
    type: "text/css",
    href: "static/component/right-sidebar/css/right-sidebar.css",
});

// 侧边栏相关JS
$("#sidebar-close img").click(function () {
    $(".right-sidebar").fadeOut();
})
$("#right-sidebar-ico").click(function () {
    $(".right-sidebar").fadeIn();
})
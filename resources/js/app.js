
// 3rd Parties
import bootstrap from './bootstrap'
import chart from './chart'
import highlight from './highlight'
import feather from './feather'
import slick from './slick'
import 'alpinejs'
import tooltipster from './tooltipster'
import datatable from './datatable'
import datepicker from './datepicker'
import select2 from './select2'
import dropzone from './dropzone'
import summernote from './summernote'
import validation from './validation'
import imageZoom from './image-zoom'
import svgLoader from './svg-loader'
import toast from './toast'

// Components
import maps from './maps'
import chat from './chat'
import dropdown from './dropdown'
import modal from './modal'
import showModal from './show-modal'
import tab from './tab'
import accordion from './accordion'
import search from './search'
import copyCode from './copy-code'
import showCode from './show-code'
import sideMenu from './side-menu'
import mobileMenu from './mobile-menu'
import sideMenuTooltip from './side-menu-tooltip'
import $ from './jquery'

require('./users/app')
require('./tickets/app')
require('./socket/app')

$(document).ready(function () {

    // Autocomplete Role Name
    $('#role_name').keyup(function (e) {
        var str = $('#role_name').val();
        str = str.replace(/\W+(?!$)/g, '-').toLowerCase(); //replace stapces with dash
        $('#role_slug').val(str);
        $('#role_slug').attr('placeholder', str);
    });
});
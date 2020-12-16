"use strict";

$(document).ready(function domReady() {
    $(".js-select2").select2({
        placeholder: "Pick states",
        theme: "material"
    });
    
    $(".select2-selection__arrow")
        .addClass("material-icons")
        .html("arrow_drop_down");
});

//material contact form animation
$('.contact-form').find('.form-control').each(function () {
    var targetItem = $(this).parent();
    if ($(this).val()) {
      $(targetItem).find('label').css({
        'top': '10px',
        'fontSize': '14px'
      });
    }
  })
  $('.contact-form').find('.form-control').focus(function () {
    $(this).parent('.input-block').addClass('focus');
    $(this).parent().find('label').animate({
      'top': '10px',
      'fontSize': '14px'
    }, 300);
  })
  $('.contact-form').find('.form-control').blur(function () {
    if ($(this).val().length == 0) {
      $(this).parent('.input-block').removeClass('focus');
      $(this).parent().find('label').animate({
        'top': '25px',
        'fontSize': '18px'
      }, 300);
    }
  })

  //---------area--de--texto------
  var f = [/*functions*/],
    i = [/*integers*/],
    v = [/*variables*/],
    e = [/*elements*/]
e.form = []
v.form = []
i.form = []
f.form = {
  events: {
    blur: function (event, elem) {
      if (typeof elem !== "undefined") {
       e.form.trg = elem
      } else {
        event = event || window.event
  			event.stopPropagation()
        if (event.srcElement) {
          e.form.trg = event.srcElement
        } else if (event.target) {
          e.form.trg = event.target
        }
      }
			e.form.trg.blur()
      e.form.sibling = e.form.trg.parentNode.firstChild
			if (!e.form.trg.value) {
				e.form.sibling.style.fontSize = ""
				e.form.sibling.style.top = ""
			}
      e.form.sibling.style.color = ""
      if (typeof v.form.typing_timer !== "undefined") {
        clearInterval(v.form.typing_timer)
        f.form.events.resize(e.form.trg)
      }
    },
    focus: function (event, elem) {
      if (typeof elem !== "undefined") {
        e.form.trg = elem
      } else {
        event = event || window.event
        event.stopPropagation()
        if (event.srcElement) {
          e.form.trg = event.srcElement
        } else if (event.target) {
          e.form.trg = event.target
        }
      }
		  e.form.trg.focus()
		  e.form.child = e.form.trg.parentNode.firstChild
      e.form.sibling.style.color = "#007BED"
			e.form.child.style.fontSize = "12px"
			e.form.child.style.top = "8px"
      if (e.form.trg.tagName == "TEXTAREA") {
        v.form.typing_timer = setInterval(function () {
          f.form.events.resize(e.form.trg)
        }, 100)
      }
    },
    resize: function (elem) {
      if (elem.value) {
        elem.style.height = elem.scrollHeight + 2 + "px"
      } else {
        elem.style.height = ""
      }
    }
  },
  init: function (event) {
    e.form.children = document.getElementsByClassName("label")
    for (i.form.child = 0; i.form.child < e.form.children.length; i.form.child += 1) {
      e.form.child = e.form.children[i.form.child]
      e.form.nested_children = e.form.child.childNodes
      for (i.form.nested_child = 0; i.form.nested_child < e.form.nested_children.length; i.form.nested_child += 1) {
        e.form.nested_child = e.form.nested_children[i.form.nested_child]
        e.form.bool = false
        if (e.form.nested_child.tagName == "TEXTAREA") {
          e.form.bool = true
        } else if (e.form.nested_child.tagName == "INPUT" && e.form.nested_child.type !== "submit") {
          e.form.bool = true
        }
        if (e.form.bool) {
          f.form.events.blur(event, e.form.nested_child)
          e.form.nested_child.addEventListener("blur", f.form.events.blur)
          e.form.nested_child.addEventListener("focus", f.form.events.focus)
        }
      }
    }
  }
}
window.onload = f.form.init(event)
/**
  * Handle Mobile Menu
  * Handle Footer
  * Header Sticky
  * Select Image
  * Variant Picker
  * Custom Dropdown
  * Check Active 
  * Color Swatch Product
  * Sidebar Mobile
  * Stagger Wrap
  * Modal Second
  * Estimate Shipping
  * Auto Popup
  * Handle Progress
  * Total Price Variant
  * Total Bundle
  * Scroll Grid Product
  * Hover Video
  * Change Value Dropdown
  * Button Loading
  * Item Checkbox
  * Parallax
  * Infinite Slide
  * Button Quantity
  * Delete Item
  * Click Control 
  * Tab Slide
  * Coppy Text 
  * Wish List
  * Bottom Sticky
  * Handle Sidebar Filter 
  * Cookie Setting
  * Preloader
  * Go Top
  * RTL

 */

(function ($) {
  "use strict";

    /* contact form
  ------------------------------------------------------------------------------------- */
  var ajaxContactForm = function () {
    $("#contactform").each(function () {
      $(this).validate({
        submitHandler: function (form) {
          var $form = $(form),
            str = $form.serialize(),
            loading = $("<div />", { class: "loading" });

          $.ajax({
            type: "POST",
            url: $form.attr("action"),
            data: str,
            beforeSend: function () {
              $form.find(".send-wrap").append(loading);
            },
            success: function (msg) {
              var result, cls;
              if (msg == "Success") {
                result =
                  "Email Sent Successfully. Thank you, Your application is accepted - we will contact you shortly";
                cls = "msg-success";
              } else {
                result = "Error sending email.";
                cls = "msg-error";
              }
              $form.prepend(
                $("<div />", {
                  class: "flat-alert " + cls,
                  text: result,
                }).append(
                  $(
                    '<a class="close" href="#"><i class="icon icon-close2"></i></a>'
                  )
                )
              );

              $form.find(":input").not(".submit").val("");
            },
            complete: function (xhr, status, error_thrown) {
              $form.find(".loading").remove();
            },
          });
        },
      });
    }); // each contactform
  };
  
  /* subscribe mailchimp
  ------------------------------------------------------------------------------------- */
  var ajaxSubscribe = {
    obj: {
      subscribeEmail: $("#subscribe-email"),
      subscribeButton: $("#subscribe-button"),
      subscribeMsg: $("#subscribe-msg"),
      subscribeContent: $("#subscribe-content"),
      dataMailchimp: $("#subscribe-form").attr("data-mailchimp"),
      success_message:
        '<div class="notification_ok">Thank you for joining our mailing list!</div>',
      failure_message:
        '<div class="notification_error">Error! <strong>There was a problem processing your submission.</strong></div>',
      noticeError: '<div class="notification_error">{msg}</div>',
      noticeInfo: '<div class="notification_error">{msg}</div>',
      basicAction: "mail/subscribe.php",
      mailChimpAction: "mail/subscribe-mailchimp.php",
    },

    eventLoad: function () {
      var objUse = ajaxSubscribe.obj;

      $(objUse.subscribeButton).on("click", function () {
        if (window.ajaxCalling) return;
        var isMailchimp = objUse.dataMailchimp === "true";

        // if (isMailchimp) {
        //   ajaxSubscribe.ajaxCall(objUse.mailChimpAction);
        // } else {
        //   ajaxSubscribe.ajaxCall(objUse.basicAction);
        // }
        ajaxSubscribe.ajaxCall(objUse.basicAction);
      });
    },

    ajaxCall: function (action) {
      window.ajaxCalling = true;
      var objUse = ajaxSubscribe.obj;
      var messageDiv = objUse.subscribeMsg.html("").hide();
      $.ajax({
        url: action,
        type: "POST",
        dataType: "json",
        data: {
          subscribeEmail: objUse.subscribeEmail.val(),
        },
        success: function (responseData, textStatus, jqXHR) {
          if (responseData.status) {
            objUse.subscribeContent.fadeOut(500, function () {
              messageDiv.html(objUse.success_message).fadeIn(500);
            });
          } else {
            switch (responseData.msg) {
              case "email-required":
                messageDiv.html(
                  objUse.noticeError.replace(
                    "{msg}",
                    "Error! Email is required."
                  )
                );
                break;
              case "email-err":
                messageDiv.html(
                  objUse.noticeError.replace(
                    "{msg}",
                    "Error! Email invalid."
                  )
                );
                break;
              case "duplicate":
                messageDiv.html(
                  objUse.noticeError.replace(
                    "{msg}",
                    "Error! Email is duplicate."
                  )
                );
                break;
              case "filewrite":
                messageDiv.html(
                  objUse.noticeInfo.replace(
                    "{msg}",
                    "Error! Mail list file is open."
                  )
                );
                break;
              case "undefined":
                messageDiv.html(
                  objUse.noticeInfo.replace(
                    "{msg}",
                    "Error! undefined error."
                  )
                );
                break;
              case "api-error":
                objUse.subscribeContent.fadeOut(500, function () {
                  messageDiv.html(objUse.failure_message);
                });
            }
            messageDiv.fadeIn(500);
          }
        },
        error: function (jqXHR, textStatus, errorThrown) {
          alert("Connection error");
        },
        complete: function (data) {
          window.ajaxCalling = false;
        },
      });
    },
  };


    /* Handle Mobile Menu
  ------------------------------------------------------------------------------------- */
  var handleMobileMenu = function() {
    const $desktopMenu = $(".box-nav-menu").clone();
    $desktopMenu.find(".demo-item, .banner, .wrapper-sub-collection, .wrapper-sub-product, .wrapper-sub-blog").remove();

    const $mobileMenu = $('<ul class="nav-ul-mb"></ul>');

    $desktopMenu.find("> li.menu-item").each(function (i, menuItem) {
        const $item = $(menuItem);
        const text = $item.find("> a.item-link").clone().children().remove().end().text().trim();
        const submenu = $item.find("> .sub-menu");
        const id = "dropdown-menu-" + i;
        if (text.toLowerCase() === "home") {
          const $li = $(`
              <li class="nav-mb-item">
                  <a href="#${id}" class="collapsed mb-menu-link" data-bs-toggle="collapse" aria-expanded="false" aria-controls="${id}">
                      <span>${text}</span>
                      <span class="btn-open-sub"></span>
                  </a>
                  <div id="${id}" class="collapse">
                      <ul class="sub-nav-menu"></ul>
                  </div>
              </li>
          `);

          $('.modalDemo .demo-name').each(function () {
              const $demoName = $(this);
              const link = $demoName.attr("href") || "#";
              const title = $demoName.text().trim();

              if (title) {
                  $li.find('.sub-nav-menu').append(`<li><a href="${link}" class="sub-nav-link">${title}</a></li>`);
              }
          });

          $mobileMenu.append($li);
          return;
        }

        if (submenu.hasClass("mega-tab")) {
            const $li = $(`
                <li class="nav-mb-item">
                    <a href="#${id}" class="collapsed mb-menu-link" data-bs-toggle="collapse" aria-expanded="false" aria-controls="${id}">
                        <span>${text}</span>
                        <span class="btn-open-sub"></span>
                    </a>
                    <div id="${id}" class="collapse"></div>
                </li>
            `);

            const $tabSubNav = $('<ul class="sub-nav-menu"></ul>');

            submenu.find(".menu-tab .tab-link").each(function (j) {
                const tabText = $(this).text().trim();
                const tabId = $(this).attr("href");
                const tabContent = submenu.find(tabId);
                const subId = `${id}-tab-${j}`;

                const $tabGroup = $(`
                    <li>
                        <a href="#${subId}" class="collapsed sub-nav-link" data-bs-toggle="collapse" aria-expanded="false" aria-controls="${subId}">
                            <span>${tabText}</span>
                            <span class="btn-open-sub"></span>
                        </a>
                        <div id="${subId}" class="collapse">
                            <ul class="sub-nav-menu sub-menu-level-2"></ul>
                        </div>
                    </li>
                `);

                tabContent.find(".menu-list a").each(function () {
                    const link = $(this).attr("href") || "#";
                    const title = $(this).text().trim();
                    if (title !== "") {
                        $tabGroup.find(".sub-menu-level-2").append(`<li><a href="${link}" class="sub-nav-link">${title}</a></li>`);
                    }
                });

                $tabSubNav.append($tabGroup);
            });

            $li.find(`#${id}`).append($tabSubNav);
            $mobileMenu.append($li);
        }
        else if (submenu.length > 0) {
            const $li = $(`
                <li class="nav-mb-item">
                    <a href="#${id}" class="collapsed mb-menu-link" data-bs-toggle="collapse" aria-expanded="false" aria-controls="${id}">
                        <span>${text}</span>
                        <span class="btn-open-sub"></span>
                    </a>
                    <div id="${id}" class="collapse"></div>
                </li>
            `);

            const $subNav = $('<ul class="sub-nav-menu"></ul>');

            submenu.find(".mega-menu-item").each(function (j) {
                const heading = $(this).find(".menu-heading").text().trim();
                const subId = `${id}-group-${j}`;
                const $group = $(`
                    <li>
                        <a href="#${subId}" class="collapsed sub-nav-link" data-bs-toggle="collapse" aria-expanded="false" aria-controls="${subId}">
                            <span>${heading}</span>
                            <span class="btn-open-sub"></span>
                        </a>
                        <div id="${subId}" class="collapse">
                            <ul class="sub-nav-menu sub-menu-level-2"></ul>
                        </div>
                    </li>
                `);

                $(this).find(".menu-list a").each(function () {
                    const link = $(this).attr("href") || "#";
                    const title = $(this).text().trim();
                    if (title !== "") {
                        $group.find(".sub-menu-level-2").append(`<li><a href="${link}" class="sub-nav-link">${title}</a></li>`);
                    }
                });

                $subNav.append($group);
            });

            if ($subNav.children().length === 0) {
                submenu.find("a").each(function () {
                    const link = $(this).attr("href") || "#";
                    const title = $(this).text().trim();
                    if (title !== "") {
                        $subNav.append(`<li><a href="${link}" class="sub-nav-link">${title}</a></li>`);
                    }
                });
            }
            $li.find(`#${id}`).append($subNav);
            $mobileMenu.append($li);
        }
        else {
            $mobileMenu.append(`<li class="nav-mb-item"><a href="${$item.find("a").attr("href")}" class="mb-menu-link"><span>${text}</span></a></li>`);
        }
    });

    $("#wrapper-menu-navigation").empty().append($mobileMenu.html());
  }

  /* Handle Footer
  -------------------------------------------------------------------------*/
  var handleFooter = function () {
    var footerAccordion = function () {
      var args = { duration: 250 };
      $(".footer-heading-mobile").on("click", function () {
        $(this).parent(".footer-col-block").toggleClass("open");
        if (!$(this).parent(".footer-col-block").is(".open")) {
          $(this).next().slideUp(args);
        } else {
          $(this).next().slideDown(args);
        }
      });
    };
    function handleAccordion() {
      if (matchMedia("only screen and (max-width: 575px)").matches) {
        if (!$(".footer-heading-mobile").data("accordion-initialized")) {
          footerAccordion();
          $(".footer-heading-mobile").data("accordion-initialized", true);
        }
      } else {
        $(".footer-heading-mobile").off("click");
        $(".footer-heading-mobile")
          .parent(".footer-col-block")
          .removeClass("open");
        $(".footer-heading-mobile").next().removeAttr("style");
        $(".footer-heading-mobile").data("accordion-initialized", false);
      }
    }
    handleAccordion();
    window.addEventListener("resize", function () {
      handleAccordion();
    });
  };

  /* Header Sticky
  -------------------------------------------------------------------------*/
  var headerSticky = function () {
    let lastScrollTop = 0;
    let delta = 5;
    let navbarHeight = $("header").outerHeight();
    let didScroll = false;

    $(window).scroll(function () {
      didScroll = true;
    });

    setInterval(function () {
      if (didScroll) {
        let st = $(window).scrollTop();
        navbarHeight = $("header").outerHeight();

        if (st > navbarHeight) {
          if (st > lastScrollTop + delta) {
            $("header").css("top", `-${navbarHeight}px`);
            $(".sticky-top").css("top", "15px");
          } else if (st < lastScrollTop - delta) {
            $("header").css("top", "0");
            $("header").addClass("header-bg");
            $(".sticky-top").css("top", `${15 + navbarHeight}px`);
          }
        } else {
          $("header").css("top", "unset");
          $("header").removeClass("header-bg");
          $(".sticky-top").css("top", "15px");
        }
        lastScrollTop = st;
        didScroll = false;
      }
    }, 250);
  };

  /* Select Image
  -------------------------------------------------------------------------------------*/
  var selectImages = function () {
    if ($(".image-select").length > 0) {
      const selectIMG = $(".image-select");

      selectIMG.find("option").each((idx, elem) => {
        const selectOption = $(elem);
        const imgURL = selectOption.attr("data-thumbnail");
        if (imgURL) {
          selectOption.attr(
            "data-content",
            `<img src="${imgURL}" /> ${selectOption.text()}`
          );
        }
      });
      selectIMG.selectpicker();
    }
  };

  /* Variant Picker
  -------------------------------------------------------------------------------------*/
  var variantPicker = function () {
    if ($(".variant-picker-item").length) {
      // variant color
      $(".color-btn").on("click", function (e) {
        var value = $(this).data("scroll");
        $(".value-currentColor").text(value);

        $(this)
          .closest(".variant-picker-values")
          .find(".color-btn")
          .removeClass("active");
        $(this).addClass("active");
      });
      // variant size
      $(".size-btn").on("click", function (e) {
        var value = $(this).data("size");
        $(".value-currentSize").text(value);

        $(this)
          .closest(".variant-picker-values")
          .find(".size-btn")
          .removeClass("active");
        $(this).addClass("active");
      });
    }
  };

  /* Custom Dropdown
  -------------------------------------------------------------------------*/
  var customDropdown = function () {
    function updateDropdownClass() {
      const $dropdown = $(".dropdown-custom");

      if ($(window).width() <= 991) {
        $dropdown.addClass("dropup").removeClass("dropend");
      } else {
        $dropdown.addClass("dropend").removeClass("dropup");
      }
    }
    updateDropdownClass();
    $(window).resize(updateDropdownClass);
  };

  /* Check Active 
  -------------------------------------------------------------------------*/
  var checkClick = function () {
    $(".flat-check-list").on("click", ".check-item", function () {
      $(this)
        .closest(".flat-check-list")
        .find(".check-item")
        .removeClass("active");
      $(this).addClass("active");
    });
  };

  /* Color Swatch Product
  -------------------------------------------------------------------------*/
  var swatchColor = function () {
    if ($(".card-product").length > 0) {
      $(".color-swatch").on("click mouseover", function () {
        var $swatch = $(this);
        var swatchColor = $swatch.find("img:not(.swatch-img)").attr("src");
        var imgProduct = $swatch.closest(".card-product").find(".img-product");
        var colorLabel = $swatch.find(".color-label").text().trim();
        imgProduct.attr("src", swatchColor);
        $swatch.closest(".card-product").find(".quickadd-variant-color .variant-value").text(colorLabel);
        $swatch.closest(".card-product").find(".color-swatch.active").removeClass("active");
        $swatch.addClass("active");
      });
    }
  };
  

  /* Sidebar Mobile
  -------------------------------------------------------------------------*/
  var sidebarMobile = function () {
    if ($(".sidebar-content-wrap").length > 0) {
      var sidebar = $(".sidebar-content-wrap").html();
      $(".sidebar-mobile-append").append(sidebar);
    }
  };

  /* Stagger Wrap
  -------------------------------------------------------------------------*/
  var staggerWrap = function () {
    if ($(".stagger-wrap").length) {
      var count = $(".stagger-item").length;
      for (var i = 1, time = 0.2; i <= count; i++) {
        $(".stagger-item:nth-child(" + i + ")")
          .css("transition-delay", time * i + "s")
          .addClass("stagger-finished");
      }
    }
  };

  /* Modal Second
  -------------------------------------------------------------------------*/
  var clickModalSecond = function () {
    $(".btn-quickview").on("click",function () {
      $("#quickView").modal("show");
    });
    $(".btn-compare").on("click",function () {
      $("#compare").modal("show");
    });
    $(".btn-quickadd").on("click",function () {
      $("#quickAdd").modal("show");
    });
    $(".btn-atc").on("click",function () {
      $("#shoppingCart").modal("show");
    });
    $(".btn-add-gift").on("click",function () {
      $(".add-gift").addClass("open");
    });
    $(".btn-add-note").on("click",function () {
      $(".add-note").addClass("open");
    });
    $(".btn-coupon").on("click",function () {
      $(".coupon").addClass("open");
    });
    $(".btn-estimate-shipping").on("click",function () {
      $(".estimate-shipping").addClass("open");
    });
    $(".tf-mini-cart-tool-close").on("click",function () {
      $(".tf-mini-cart-tool-openable").removeClass("open");
    });
  };

  /* Estimate Shipping
  -------------------------------------------------------------------------*/
  var estimateShipping = function () {
    if ($(".estimate-shipping").length) {
      const countrySelect = document.getElementById("shipping-country-form");
      const provinceSelect = document.getElementById("shipping-province-form");
      const zipcodeInput = document.getElementById("zipcode");
      const zipcodeMessage = document.getElementById("zipcode-message");
      const zipcodeSuccess = document.getElementById("zipcode-success");

      function updateProvinces() {
        const selectedCountry = countrySelect.value;
        const selectedOption =
          countrySelect.options[countrySelect.selectedIndex];
        const provincesData = selectedOption.getAttribute("data-provinces");

        const provinces = JSON.parse(provincesData);

        provinceSelect.innerHTML = "";

        if (provinces.length === 0) {
          const option = document.createElement("option");
          option.textContent = "------";
          provinceSelect.appendChild(option);
        } else {
          provinces.forEach((province) => {
            const option = document.createElement("option");
            option.value = province[0];
            option.textContent = province[1];
            provinceSelect.appendChild(option);
          });
        }
      }

      countrySelect.addEventListener("change", updateProvinces);

      function validateZipcode(zipcode, country) {
        let regex;

        switch (country) {
          case "Australia":
            regex = /^\d{4}$/;
            break;
          case "Austria":
            regex = /^\d{4}$/;
            break;
          case "Belgium":
            regex = /^\d{4}$/;
            break;
          case "Canada":
            regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
            break;
          case "Czech Republic":
            regex = /^\d{5}$/;
            break;
          case "Denmark":
            regex = /^\d{4}$/;
            break;
          case "Finland":
            regex = /^\d{5}$/;
            break;
          case "France":
            regex = /^\d{5}$/;
            break;
          case "Germany":
            regex = /^\d{5}$/;
            break;
          case "United States":
            regex = /^\d{5}(-\d{4})?$/;
            break;
          case "United Kingdom":
            regex = /^[A-Za-z]{1,2}\d[A-Za-z\d]? \d[A-Za-z]{2}$/;
            break;
          case "India":
            regex = /^\d{6}$/;
            break;
          case "Japan":
            regex = /^\d{3}-\d{4}$/;
            break;
          case "Mexico":
            regex = /^\d{5}$/;
            break;
          case "South Korea":
            regex = /^\d{5}$/;
            break;
          case "Spain":
            regex = /^\d{5}$/;
            break;
          case "Italy":
            regex = /^\d{5}$/;
            break;
          case "Vietnam":
            regex = /^\d{6}$/;
            break;
          default:
            return true;
        }

        return regex.test(zipcode);
      }

      document
        .getElementById("shipping-form")
        .addEventListener("submit", function (event) {
          const zipcode = zipcodeInput.value.trim();
          const country = countrySelect.value;

          if (!validateZipcode(zipcode, country)) {
            zipcodeMessage.style.display = "block";
            zipcodeSuccess.style.display = "none";
            event.preventDefault();
          } else {
            zipcodeMessage.style.display = "none";
            zipcodeSuccess.style.display = "block";
            event.preventDefault();
          }
        });

      window.onload = updateProvinces;
    }
  };

  /* Auto Popup
  ------------------------------------------------------------------------------------- */
  var autoPopup = function () {
    // if ($(".auto-popup").length > 0) {
    //     let pageKey = "showPopup_" + window.location.pathname; 
    //     let showPopup = sessionStorage.getItem(pageKey);

    //     if (!JSON.parse(showPopup)) {
    //         setTimeout(function () {
    //             $(".auto-popup").modal("show");
    //         }, 3000);
    //     }
        
    //     $(".btn-hide-popup").on("click", function () {
    //         sessionStorage.setItem(pageKey, true); 
    //     });
    // }

    if ($("#pop-up").length > 0) {
      setTimeout(function () {
          $("#pop-up").addClass("show");
      }, 3000);
      
      $(".close-pop-up").on("click", function () {
        $("#pop-up").removeClass("show");
        setTimeout(function () {
          $(".auto-popup").modal("show");
        }, 120000);
      });
    }
  };

  /* Handle Progress
  ------------------------------------------------------------------------------------- */
  var handleProgress = function () {
    if ($(".progress-sold").length > 0) {
      var progressValue = $(".progress-sold .value").data("progress");
      setTimeout(function () {
        $(".progress-sold .value").css("width", progressValue + "%");
      }, 800);
    }

    function handleProgressBar(showEvent, hideEvent, target) {
      $(target).on(hideEvent, function () {
        $(".tf-progress-bar .value").css("width", "0%");
      });
    
      $(target).on(showEvent, function () {
        setTimeout(function () {
          var progressValue = $(".tf-progress-bar .value").data("progress");
          $(".tf-progress-bar .value").css("width", progressValue + "%");
        }, 600);
      });
    }
    
    if ($(".popup-shopping-cart").length > 0) {
      handleProgressBar("show.bs.offcanvas", "hide.bs.offcanvas", ".popup-shopping-cart");
    }
    
    if ($(".popup-shopping-cart").length > 0) {
      handleProgressBar("show.bs.modal", "hide.bs.modal", ".popup-shopping-cart");
    }
  };

  /* Total Price Variant
  ------------------------------------------------------------------------------------- */
  var total_Price = function () {
    $(".tf-cart-item").each(function () {
      var productItem = $(this);
      var price = parseFloat(productItem.find(".price-on-sale").text().replace("$", ""));
      var quantity = productItem.find(".quantity-product").val();
      var totalPrice = price * quantity;
      
      productItem.find(".total-price").text(
        "$" + totalPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      );
    });
  }
  var totalPriceVariant = function () {
    $(".tf-product-info-list,.tf-cart-item").each(function () {
      var productItem = $(this);
      var basePrice =
        parseFloat(productItem.find(".price-on-sale").data("base-price")) ||
        parseFloat(productItem.find(".price-on-sale").text().replace("$", ""));
      var quantityInput = productItem.find(".quantity-product");

      productItem.find(".color-btn, .size-btn").on("click", function () {
        var newPrice = parseFloat($(this).data("price")) || basePrice;
        quantityInput.val(1);
        productItem
          .find(".price-on-sale")
          .text(
            "$" + newPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          );
        updateTotalPrice(newPrice, productItem);
      });

      productItem.find(".btn-increase").on("click", function () {
        var currentQuantity = parseInt(quantityInput.val(), 10);
        quantityInput.val(currentQuantity + 1);
        updateTotalPrice(null, productItem);
      });

      productItem.find(".btn-decrease").on("click", function () {
        var currentQuantity = parseInt(quantityInput.val(), 10);
        if (currentQuantity > 1) {
          quantityInput.val(currentQuantity - 1);
          updateTotalPrice(null, productItem);
        }
      });

      function updateTotalPrice(price, scope) {
        var currentPrice =
          price ||
          parseFloat(scope.find(".price-on-sale").text().replace("$", ""));
        var quantity = parseInt(scope.find(".quantity-product").val(), 10);
        var totalPrice = currentPrice * quantity;
        scope
          .find(".total-price")
          .text(
            "$" + totalPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          );
      }
    });
  };


  /* Total Bundle
  ------------------------------------------------------------------------------------- */
  var updateBundleTotal = function () {
    var $bundleItems = $(".tf-bundle-product-item");
    var totalPrice = 0;
    var totalPriceOld = 0;

    $bundleItems.each(function () {
        var $this = $(this);
        var isChecked = $this.find(".tf-check").prop("checked");

        if (isChecked) {
            var newPrice = parseFloat(
                $this.find(".new-price").text().replace("$", "")
            );
            var oldPrice = parseFloat(
                $this.find(".old-price").text().replace("$", "") || 0
            );

            totalPrice += newPrice;
            totalPriceOld += oldPrice || newPrice; 
        }
    });

    $(".total-price").text(`$${totalPrice.toFixed(2)}`);
    $(".total-price-old").text(`$${totalPriceOld.toFixed(2)}`);
  };

  var initBundleFunctionality = function () {
      var $firstCheck = $(".tf-bundle-product-item").first().find(".tf-check");
      $firstCheck.prop("checked", true).prop("disabled", true);
      updateBundleTotal();
      $(".tf-check").on("change", function () {
          updateBundleTotal();
      });
  };


  /* Scroll Grid Product
  ------------------------------------------------------------------------------------- */
  var scrollGridProduct = function () {
    var scrollContainer = $(".wrapper-gallery-scroll");
    var activescrollBtn = null;
    var offsetTolerance = 20;

    function isHorizontalMode() {
      return window.innerWidth <= 767;
    }

    function getTargetScroll(target, isHorizontal) {
      if (isHorizontal) {
        return (
          target.offset().left -
          scrollContainer.offset().left +
          scrollContainer.scrollLeft()
        );
      } else {
        return (
          target.offset().top -
          scrollContainer.offset().top +
          scrollContainer.scrollTop()
        );
      }
    }

    $(".btn-scroll-target").on("click", function () {
      var scroll = $(this).data("scroll");
      var target = $(".item-scroll-target[data-scroll='" + scroll + "']");

      if (target.length > 0) {
        var isHorizontal = isHorizontalMode();
        var targetScroll = getTargetScroll(target, isHorizontal);

        if (isHorizontal) {
          scrollContainer.animate({ scrollLeft: targetScroll }, 600);
        } else {
          $("html, body").animate({ scrollTop: targetScroll }, 100);
        }

        $(".btn-scroll-target").removeClass("active");
        $(this).addClass("active");
        activescrollBtn = $(this);
      }
    });

    $(window).on("scroll", function () {
      var isHorizontal = isHorizontalMode();
      $(".item-scroll-target").each(function () {
        var target = $(this);
        var targetScroll = getTargetScroll(target, isHorizontal);

        if (isHorizontal) {
          if (
            $(window).scrollLeft() >= targetScroll - offsetTolerance &&
            $(window).scrollLeft() <= targetScroll + target.outerWidth()
          ) {
            $(".btn-scroll-target").removeClass("active");
            $(
              ".btn-scroll-target[data-scroll='" + target.data("scroll") + "']"
            ).addClass("active");
          }
        } else {
          if (
            $(window).scrollTop() >= targetScroll - offsetTolerance &&
            $(window).scrollTop() <= targetScroll + target.outerHeight()
          ) {
            $(".btn-scroll-target").removeClass("active");
            $(
              ".btn-scroll-target[data-scroll='" + target.data("scroll") + "']"
            ).addClass("active");
          }
        }
      });
    });
  };

  /* Change Value Dropdown
  ------------------------------------------------------------------------------------- */
  var changeValueDropdown = function () {
    if ($(".tf-dropdown").length > 0) {
      $(".select-item").on("click",function (event) {
        $(this)
          .closest(".tf-dropdown")
          .find(".text-sort-value")
          .text($(this).find(".text-value-item").text());

        $(this)
          .closest(".dropdown-menu")
          .find(".select-item.active")
          .removeClass("active");

        $(this).addClass("active");
      });
    }
  };

  /* Button Loading
  -------------------------------------------------------------------------*/
  var btnLoading = function () {
    if ($(".tf-loading").length) {
      $(".tf-loading").on("click", function (e) {
        $(this).addClass("loading");
        var $this = $(this);
        setTimeout(function () {
          $this.removeClass("loading");
        }, 600);
      });
    }
  };

  /* Item Checkbox
  -------------------------------------------------------------------------*/
  var itemCheckbox = function () {
    if ($(".item-has-checkbox").length) {
      $(".item-has-checkbox input:checkbox").on("click", function (e) {
        $(this).closest(".item-has-checkbox").toggleClass("check");
      });
    }
  };

  
  /* Parallax
  ----------------------------------------------------------------------------*/
  var efectParalax = function () {
      $(".effect-paralax").each(function () {
        new SimpleParallax(this, {
          delay: 0.5,
          orientation: "up",
          scale: 1.3,
          transition: "cubic-bezier(0.2, 0.8, 1, 1)",
          customContainer: "",
          customWrapper: "",
        });
      });
  };

  /* Parallaxie js 
  -------------------------------------------------------------------------------------*/

  var parallaxie = function () {
      var $window = $(window);
      if ($(".parallaxie").length && $window.width() > 991) {
          if ($window.width() > 768) {
              $(".parallaxie").parallaxie({
                  speed: 0.55,
                  offset: 0,
              });
          }
      }
  };

  /* Infinite Slide
  ----------------------------------------------------------------------------*/
  var infiniteSlide = function () {
    $(".infiniteslide").each(function () {
      var $this = $(this);
      var style = $this.data("style") || "left";
      var clone = parseInt($this.data("clone")) || 2;
      var speed = parseInt($this.data("speed")) || 100;
  
      if ($("body").hasClass("rtl")) {
        style = style === "left" ? "right" : "left";
      }
  
      $this.infiniteslide({
        speed: speed,
        direction: style,
        clone: clone,
      });
    });
  };
  

  /* Button Quantity
  ----------------------------------------------------------------------------*/
  var btnQuantity = function () {
    $(".minus-btn").on("click", function (e) {
      e.preventDefault();
      var $this = $(this);
      var $input = $this.closest("div").find("input");
      var value = parseInt($input.val(), 10);

      if (value > 1) {
        value = value - 1;
      }
      $input.val(value);
    });

    $(".plus-btn").on("click", function (e) {
      e.preventDefault();
      var $this = $(this);
      var $input = $this.closest("div").find("input");
      var value = parseInt($input.val(), 10);

      if (value > -1) {
        value = value + 1;
      }
      $input.val(value);
    });
  };

  /* Delete compare
  ----------------------------------------------------------------------------*/
  var deleteCompare = function () {
    function checkEmpty() {
        var $compareInner = $(".tf-compare-inner");
        if ($(".list-file-delete .file-delete").length === 0) {
            $(".tf-compare-buttons").hide(); 
            if ($compareInner.find(".tf-compare-empty").length === 0) {
                $compareInner.append(`
                    <div class="tf-compare-empty text-center">
                        <p class="text-lg fw-medium text-main">Compare list is empty</p>
                    </div>
                `);
            }
        } else {
            $(".tf-compare-buttons").show(); 
            $compareInner.find(".tf-compare-empty").remove(); 
        }
    }

    $(".remove").on("click", function (e) {
        e.preventDefault();
        var $this = $(this);
        $this.closest(".file-delete").remove();
        checkEmpty(); 
    });

    $(".clear-file-delete").on("click", function (e) {
        e.preventDefault();
        $(this).closest(".list-file-delete").find(".file-delete").remove();
        checkEmpty();
    });
  };

  /* Delete wishlist
  ----------------------------------------------------------------------------*/
  var deleteWishList = function () {
    function checkEmpty() {
      var $wishlistInner = $(".wrapper-wishlist");
      var productCount = $(".wrapper-wishlist .card-product").length;
      
      if (productCount === 0) {
        $(".section-viewed").show();
      } else {
        $(".section-viewed").hide();
      }
  
      if (productCount <= 8) {
        $(".wrapper-wishlist .wg-pagination").hide();
      } else {
        $(".wrapper-wishlist .wg-pagination").show();
      }
  
      if (productCount === 0) {
        $wishlistInner.append(`
          <div class="tf-wishlist-empty text-center">
            <p class="text-md text-noti">No product were added to the wishlist.</p>
            <a href="index.html" class="tf-btn animate-btn btn-back-shop">Back to Shopping</a>
          </div>
        `);
      } else {
        $wishlistInner.find(".tf-compare-empty").remove();
      }
    }
  
    $(".remove").on("click", function (e) {
      e.preventDefault();
      var $this = $(this);
      $this.closest(".card-product").remove();
      checkEmpty();
    });
  
    checkEmpty();
  };
  

  /* Click Control 
  ------------------------------------------------------------------------------------- */
  var clickControl = function () {
    $(".btn-add-address").on("click",function () {
      $(".show-form-address").toggle();
    });
    $(".btn-hide-address").on("click",function () {
      $(".show-form-address").hide();
    });
    $(".btn-delete-address").on("click",function () {
      $(this).closest(".account-address-item").remove();
      var item = $(this).closest(".account-address-item");
      if (item.hasClass("editing")) {
        $(".edit-form-address").toggle();
        $(".edit-form-address").toggleClass("show");
      }
    });

    $(".btn-edit-address").on("click",function (e) {
      var item = $(this).closest(".account-address-item");
      if ($(".edit-form-address").hasClass("show")) {
        if (item.hasClass("editing")) {
          $(".edit-form-address").toggle();
          $(".edit-form-address").toggleClass("show");
          $(".account-address-item").removeClass("editing");
        } else {
          $(".account-address-item").removeClass("editing");
          item.addClass("editing");
        }
      } else {
        $(".edit-form-address").toggle();
        $(".edit-form-address").toggleClass("show");
        $(this).closest(".account-address-item").toggleClass("editing");
      }
    });
    $(".btn-hide-edit-address").on("click",function () {
      $(".edit-form-address").hide();
      $(".edit-form-address").removeClass("show");
      $(".account-address-item").removeClass("editing");
    });
  };

  /* Tab Slide 
  ------------------------------------------------------------------------------------- */
  var tabSlide = function () {
    if ($(".tab-slide").length > 0) {
      function updateTabSlide() {
        var $activeTab = $(".tab-slide li.active");
        if ($activeTab.length > 0) {
          var $width = $activeTab.width();
          var $left = $activeTab.position().left;
          var sideEffect = $activeTab.parent().find(".item-slide-effect");
          $(sideEffect).css({
            width: $width,
            transform: "translateX(" + $left + "px)",
          });
        }
      }
      $(".tab-slide li").on("click", function () {
        var itemTab = $(this).parent().find("li");
        $(itemTab).removeClass("active");
        $(this).addClass("active");

        var $width = $(this).width();
        var $left = $(this).position().left;
        var sideEffect = $(this).parent().find(".item-slide-effect");
        $(sideEffect).css({
          width: $width,
          transform: "translateX(" + $left + "px)",
        });
      });

      $(window).on("resize", function () {
        updateTabSlide();
      });

      updateTabSlide();
    }
  };

  /* Coppy Text 
  ------------------------------------------------------------------------------------- */
  var coppyText = function () {
    $("#btn-coppy-text").on("click", function () {
      var text = document.getElementById("coppyText");

      var coppy = document.createRange();
      coppy.selectNode(text);

      window.getSelection().removeAllRanges();
      window.getSelection().addRange(coppy);

      try {
        document.execCommand("copy");
        alert("Text copied: " + text.innerText);
      } catch (err) {
        alert("Failed to copy text: " + err);
      }

      window.getSelection().removeAllRanges();
    });
  };

  /* Wish List 
  ------------------------------------------------------------------------------------- */
  var wishList = function () {
    $(".btn-add-wishlist").on("click", function () {
      $(this).toggleClass("added-wishlist");
    });
    $(".card-product .wishlist").on("click", function () {
      $(this).toggleClass("addwishlist"); 
  
      let icon = $(this).find(".icon"); 
      let tooltip = $(this).find(".tooltip");
  
      if ($(this).hasClass("addwishlist")) {
        icon.removeClass("icon-heart2").addClass("icon-trash");
        tooltip.text("Remove Wishlist");
      } else {
        icon.removeClass("icon-trash").addClass("icon-heart2");
        tooltip.text("Add to Wishlist");
      }
    });
  };

  /* Bottom Sticky
  --------------------------------------------------------------------------------------*/
  var scrollBottomSticky = function () {
    $(window).on("scroll", function () {
      var scrollPosition = $(this).scrollTop();
      var myElement = $(".tf-sticky-btn-atc");

      if (scrollPosition >= 500) {
        myElement.addClass("show");
      } else {
        myElement.removeClass("show");
      }
    });
  };

  /* Handle Sidebar Filter 
  -------------------------------------------------------------------------------------*/
  var handleSidebarFilter = function () {
    $("#filterShop,.sidebar-btn").on("click",function () {
      if ($(window).width() <= 1200) {
        $(".sidebar-filter,.overlay-filter").addClass("show");
      }
    });
    $(".close-filter,.overlay-filter").on("click",function () {
      $(".sidebar-filter,.overlay-filter").removeClass("show");
    });
  };

  /* Cookie Setting
  -------------------------------------------------------------------------------------*/
  var cookieSetting = function () {
    $(".cookie-banner .overplay").on("click", function () {
      $(".cookie-banner").hide();
    });

    function setCookie(name, value, days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      const expires = "expires=" + date.toUTCString();
      document.cookie = `${name}=${value}; ${expires}; path=/`;
    }

    function getCookie(name) {
      const nameEQ = name + "=";
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(nameEQ) === 0) {
          return cookie.substring(nameEQ.length, cookie.length);
        }
      }
      return null;
    }

    function checkCookie() {
      const $cookieBanner = $("#cookie-banner");
      const accepted = getCookie("cookieAccepted");

      if (accepted) {
        $cookieBanner.hide();
      } else {
        $cookieBanner.show();
      }
    }

    $(document).ready(function () {
      $("#accept-cookie").on("click", function () {
        setCookie("cookieAccepted", "true", 30);
        $("#cookie-banner").hide();
      });

      checkCookie();
    });
  };

  /* Postion Navigation Centered
  -------------------------------------------------------------------------------------*/
  var posNavSwiper = function () {
    $(".wrap-pos-nav").each(function () {
      var imageBlog = $(this).find(".blog-item-v2 .entry-image"); 
      if (imageBlog.length) {
          var contentHeight = $(this).find(".blog-item-v2 .entry-content").outerHeight(); 
          var newTop = `calc(50% - ${contentHeight / 2}px)`; 
          $(this).find(".nav-swiper").css("top", newTop);
      }
      var imageProduct = $(this).find(".card-product .card-product-wrapper"); 
      if (imageProduct.length) {
          var contentHeight = $(this).find(".card-product .card-product-info").outerHeight(); 
          var newTop = `calc(50% - ${contentHeight / 2}px)`; 
          $(this).find(".nav-swiper").css("top", newTop);
      }
  });
  }

  /* Block Form
  -------------------------------------------------------------------------------------*/  
  var blockForm = function () {
    $(".form-newsletter").submit(function (e) {
      e.preventDefault(); 
    
      $(".form-newsletter").append(
        '<p class="mt_10 feedback-message text-sm">Subscribe successfully!</p>'
      );
  });
  };

  /* Check Input Discount
  -------------------------------------------------------------------------------------*/
  var handleResultIP = function () {
    $(".box-ip-discount button").on("click", function (e) {
      e.preventDefault();
      $(".box-ip-discount .discount-message").remove();
      var discountCode = $(".box-ip-discount .value-discount").val().trim();
      if(discountCode === ""){
        $(".box-ip-discount").append('<div class="discount-message text-sm error">Please enter a discount code.</div>');
      } else {
        $(".box-ip-discount").append('<div class="discount-message text-sm success">Discount code applied successfully!</div>');
      }
      $(".discount-message").hide().fadeIn(300);
    })
    $(".shipping-cart-box button").on("click", function(e) {
      e.preventDefault();
      
      $(".shipping-message").remove();
      
      var country = $(".shipping-cart-box #country").val().trim();
      var state = $(".shipping-cart-box #state").val().trim();
      var zipcode = $(".shipping-cart-box #code").val().trim();
      
      if(country === "" || state === "" || zipcode === "") {
        $(".shipping-cart-box").append(
          '<div class="shipping-message text-sm error">Please enter all required shipping details.</div>'
        );
      } else {
        $(".shipping-cart-box").append(
          '<div class="shipping-message text-sm success">Shipping estimate applied successfully!</div>'
        );
      }
      
      $(".shipping-message").hide().fadeIn(300);
    });
    $(".feedback-box button").on("click", function(e) {
      e.preventDefault();
      
      $(".feedback-message").remove();
      
      var country = $(".feedback-box #name").val().trim();
      var state = $(".feedback-box #email").val().trim();
      var zipcode = $(".feedback-box #desc").val().trim();
      
      if(country === "" || state === "" || zipcode === "") {
        $(".feedback-box").append(
          '<div class="feedback-message text-sm error">Please enter all required feedback</div>'
        );
      } else {
        $(".feedback-box").append(
          '<div class="feedback-message text-sm success">Feedback applied successfully!</div>'
        );
      }
      
      $(".feedback-message").hide().fadeIn(300);
    });
  };

  /* Preloader
  -------------------------------------------------------------------------------------*/
  var preloader = function () {
    setTimeout(function () {
      $(".preload").fadeOut("slow", function () {
        $(this).remove();
      });
    }, 200);
  };

  /* Go Top
  -------------------------------------------------------------------------------------*/
  var goTop = function () {
    var $goTop = $("#goTop");
    var $borderProgress = $(".border-progress");

    $(window).on("scroll", function () {
      var scrollTop = $(window).scrollTop();
      var docHeight = $(document).height() - $(window).height();
      var scrollPercent = (scrollTop / docHeight) * 100;
      var progressAngle = (scrollPercent / 100) * 360;

      $borderProgress.css("--progress-angle", progressAngle + "deg");

      if (scrollTop > 100) {
        $goTop.addClass("show");
      } else {
        $goTop.removeClass("show");
      }
    });

    $goTop.on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 0);
    });
  };

  // removecompare
  var removecompare = function () {
    $(".tf-compare-remove").on("click", function () {
      const colIndex = $(this).closest('.tf-compare-col').index();
      $('.tf-compare-row').each(function() {
        $(this).find('.tf-compare-col').eq(colIndex).remove();
      });
    });
  }

  var handleSliderViewPort = function () {
    function setSliderHeight() {
      var $topbar = $('.tf-topbar');
      var $header = $('.header-default');
      var $slider = $('.slider-viewport .tf-sw-slideshow');
  
      if (!$slider.length) return;
  
      if ($(window).width() < 1440) {
        $slider.css('height', 'auto');
        return;
      }
  
      var topbarHeight = $topbar.length ? $topbar.outerHeight() : 0;
  
      var headerHeight = 0;
      var headerMarginOffset = 0;
  
      if ($header.hasClass('header-absolute')) {
        headerHeight = 0;
        headerMarginOffset = 0;
      } else if ($header.hasClass('header-absolute-2')) {
        headerHeight = 0;
        headerMarginOffset = Math.abs(parseFloat($header.css('margin-bottom')) || 0);
      } else {
        headerHeight = $header.outerHeight();
        headerMarginOffset = 0;
      }
  
      var totalOffset = topbarHeight + headerHeight - headerMarginOffset;
      var viewportHeight = $(window).height();
      var sliderHeight = viewportHeight - totalOffset;
  
      $slider.css('height', sliderHeight + 'px');
      $slider.find('.swiper-slide').css('height', '100%');
    }
  
    $(window).on('load resize', function () {
      setTimeout(setSliderHeight, 50);
    });
  };
  
  

  /* RTL
  ------------------------------------------------------------------------------------- */
  var RTL = function () {
    if (localStorage.getItem("dir") === "rtl") {
      $("html").attr("dir", "rtl");
      $("body").addClass("rtl");
      $("#toggle-rtl").text("ltr");
      $(
        ".box-nav-menu .mega-tab .tab-link"
      )
      .find(".icon-arr-right")
      .removeClass("icon-arr-right")
      .addClass("icon-arr-left");
    } else {
      $("html").attr("dir", "ltr");
      $("body").removeClass("rtl");
      $("#toggle-rtl").text("rtl");
    }
    $("#toggle-rtl").on("click", function () {
      if ($("html").attr("dir") === "rtl") {
        localStorage.setItem("dir", "ltr");
        $("#toggle-rtl").text("rtl");
      } else {
        localStorage.setItem("dir", "rtl");
        $("#toggle-rtl").text("ltr");
      }
      location.reload();
    });
  };

  // Dom Ready
  $(function () {
    ajaxContactForm();
    ajaxSubscribe.eventLoad();
    handleMobileMenu();
    handleFooter();
    headerSticky();
    selectImages();
    variantPicker();
    customDropdown();
    checkClick();
    swatchColor();
    sidebarMobile();
    staggerWrap();
    clickModalSecond();
    estimateShipping();
    autoPopup();
    handleProgress();
    totalPriceVariant();
    initBundleFunctionality();
    scrollGridProduct();
    changeValueDropdown();
    btnLoading();
    itemCheckbox();
    efectParalax();
    parallaxie();
    btnQuantity();
    deleteCompare();
    deleteWishList();
    clickControl();
    coppyText();
    wishList();
    scrollBottomSticky();
    handleSidebarFilter();
    cookieSetting();
    posNavSwiper();
    // blockForm();
    handleResultIP();
    RTL();
    removecompare();
    handleSliderViewPort();
    tabSlide();
    infiniteSlide();
    total_Price();
    preloader();
    goTop();
    new WOW().init();

  });
})(jQuery);

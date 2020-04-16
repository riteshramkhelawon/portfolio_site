  window.addEventListener("DOMContentLoaded", function() {

        // get the form elements defined in your form HTML above

        var form = document.getElementById("contact-form");
        var button = document.getElementById("send-message-btn");
        var status = document.getElementById("my-form-status");

        // Success and Error functions for after the form is submitted

        function success() {
          form.reset();
          button.style = "display: none ";
          status.style = "display: block ";
          status.classList.add("alert", "alert-success", "text-center");
          status.innerHTML = "Thanks for your message. I'll get back to you ASAP!";
        }

        function error() {
          status.style = "display: block ";
          status.classList.add("alert", "alert-danger", "text-center");
          status.innerHTML = "Oops! There was a problem sending your message.";
        }

        // handle the form submission event

        form.addEventListener("submit", function(ev) {
          ev.preventDefault();
          var data = new FormData(form);
          ajax(form.method, form.action, data, success, error);
        });
        });

        // helper function for sending an AJAX request

        function ajax(method, url, data, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function() {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
          } else {
            error(xhr.status, xhr.response, xhr.responseType);
          }
        };
        xhr.send(data);
        }
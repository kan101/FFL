window.onload = function(){

    var arrow_menu = document.getElementsByClassName('arrow-menu')[0].getElementsByTagName('button');
    var company_info = document.getElementsByClassName('company-info')[0];
    var get_paid = document.getElementsByClassName('get-paid')[0];

    var submit_btn = document.getElementsByClassName('submit-btn');
    var submit_ffl_input = document.getElementsByClassName('submit-ffl-input');
    var profile_input = document.getElementsByClassName('profile-input');

    var get_paid_input = document.getElementsByClassName('get-paid-input');
    var shipping_info = document.getElementsByClassName('shipping-info')[0];

    var ffl = document.getElementsByClassName('first-ffl')[0];

    function validate_zip(zip) {
        var re = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
        return re.test(zip);
    }

    function validate_city(a) {
        var re = /[a-z]/;
        return re.test(a);
    }

    function validate_phone(a) {
        var re = /^[0-9]+$/;
        return re.test(a);
    }

    var check_ffl = function(){
        var i;
        for(i=0;i<submit_ffl_input.length; i++){
            if(submit_ffl_input[i].value == ""){
                submit_ffl_input[i].style.cssText="border: thin red solid";
                return 1;
            }

            else if (i==2){
                if(validate_zip(submit_ffl_input[i].value) == false){
                    submit_ffl_input[i].style.cssText="border: thin red solid";
                    return 1;
                }
            }

            else {
                submit_ffl_input[i].style.cssText="border: thin silver solid";
            }
        }
    };

    var check_profile = function(){
        var i;
        for(i=0;i<profile_input.length; i++){
            if(profile_input[i].value == ""){
                profile_input[i].style.cssText="border: thin red solid";
                return 1;
            }

            else if (i==2){
                if(validate_city(profile_input[i].value) == false){
                    profile_input[i].style.cssText="border: thin red solid";
                    return 1;
                }
            }

            else if (i==3){
                if(validate_zip(profile_input[i].value) == false){
                    profile_input[i].style.cssText="border: thin red solid";
                    return 1;
                }
            }

            else if (i==4){
                if(validate_phone(profile_input[i].value) == false){
                    profile_input[i].style.cssText="border: thin red solid";
                    return 1;
                }
            }

            else {
                profile_input[i].style.cssText="border: thin silver solid";
            }
        }
    };

    var check_get_paid = function(){
        var i;
        for(i=0;i<get_paid_input.length; i++){
            if(get_paid_input[i].value == ""){
                get_paid_input[i].style.cssText="border: thin red solid";
                return 1;
            }

            else {
                profile_input[i].style.cssText="border: thin silver solid";
            }
        }
    };

    submit_btn[0].onclick = function(){
        if(check_ffl()== 1){
            return false;
        }
    };
};
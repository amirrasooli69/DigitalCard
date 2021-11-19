/**
* TODO:
* - add picture and company logo
*/
var vcard= {
    str_start:'BEGIN:VCARD\nVERSION:3.0\n',
    str_vcard:'BEGIN:VCARD\nVERSION:3.0\n',
    str_end:'\nEND:VCARD',
    goog_chart:'http://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=',
    form:[],
    get_field: function(field){
        for(var i in vcard.form){
            if(vcard.form[i].name === field){ 
                return vcard.form[i].value.replace(/^\s+|\s+$/g,"");
            } 
        }
    },
    add_you: function(){
        var first_name = vcard.get_field("first_name"),
            last_name = vcard.get_field("last_name"),
            birthday = vcard.get_field('birthday'),
            gender = vcard.get_field('gender');
        
        vcard.str_vcard += 'N:'+last_name+';'+first_name+'\n'+
                            'FN:'+first_name+' '+last_name;
        // TODO convert date to american format
        if(birthday !== ''){ vcard.str_vcard += '\nBDAY:'+birthday; }
        
        if(gender !== ''){ vcard.str_vcard += '\nX-GENDER:'+gender; }
    },
    add_address: function(){
        var home_street = vcard.get_field("home_street"),
            home_city = vcard.get_field("home_city"),
            home_region = vcard.get_field("home_region"),
            home_post = vcard.get_field("home_post"),
            home_country = vcard.get_field("home_country"),
            org_street = vcard.get_field("org_street"),
            org_city = vcard.get_field("org_city"),
            org_region = vcard.get_field("org_region"),
            org_post = vcard.get_field("org_post"),
            org_country = vcard.get_field("org_country");
        
        if(home_street+home_city+home_region+home_post+home_country !== ''){
            vcard.str_vcard += '\nADR;TYPE=home:;;'+home_street+';'+home_city+';'+home_region+
                            ';'+home_post+';'+home_country;
        }
        if(org_street+org_city+org_region+org_post+org_country !== ''){
            vcard.str_vcard += '\nADR;TYPE=work:;;'+org_street+';'+org_city+';'+org_region+
                            ';'+org_post+';'+org_country;
        }
      }, 
    add_tel: function(){
     var home = vcard.get_field("home_tel"),
         work = vcard.get_field("org_tel");
        
        if(home !== ''){ vcard.str_vcard += '\nTEL;TYPE=home:'+home; }
        
        if(work !== ''){ vcard.str_vcard += '\nTEL;TYPE=work:'+work; }
    },
    add_email: function(){
       var home = vcard.get_field("home_email"),
         work = vcard.get_field("org_email");
        
        if(home !== ''){ vcard.str_vcard += '\nEMAIL;TYPE=internet,home:'+home; }
        
        if(work !== ''){ vcard.str_vcard += '\nEMAIL;TYPE=internet,work:'+work; }
    },
    add_url: function(){
       var home = vcard.get_field("home_url"),
         work = vcard.get_field("org_url");
        
        if(home !== ''){ vcard.str_vcard += '\nURL;TYPE=home:'+home; }
        
        if(work !== ''){ vcard.str_vcard += '\nURL;TYPE=work:'+work; }
    },
    add_work: function(){
       var name = vcard.get_field("org_name"),
           title = vcard.get_field("org_title");
        
        if(name !== ''){ vcard.str_vcard += '\nORG:'+name; }
        
        if(title !== ''){ vcard.str_vcard +='\nTITLE:'+title; }
    },
    add_social: function(){
       var facebook = vcard.get_field("facebook"),
         twitter = vcard.get_field("twitter"),
         youtube = vcard.get_field("youtube"),
         skype = vcard.get_field("skype"),
         flickr = vcard.get_field("flickr");
        
        if(facebook !== 'http://www.facebook.com/'){ vcard.str_vcard += '\nsocialProfile;type=facebook:'+facebook; }
        
        if(twitter !== 'http://www.twitter.com/'){ vcard.str_vcard +='\nsocialProfile;type=twitter:'+twitter; }
        
        if(flickr !== 'http://www.flickr.com/'){ vcard.str_vcard +='\nalbum;type=photo:'+flickr; }
        
        if(youtube !== 'http://www.youtube.com/'){ vcard.str_vcard +='\nX-SKYPE:'+youtube; }
        
        if(skype !== ''){ vcard.str_vcard +='\nalbum;type=video:'+skype; }
    }, 
    required_check: function(){
        var first_name = vcard.get_field("first_name"),
            last_name = vcard.get_field("last_name"),
            msg = 'Field%FIELD% %NAME% %VERB% required.',
            fields = [];
        
        if(first_name === ''){ fields.push('First name'); }
        
        if(last_name === ''){ fields.push('Last name'); }
        
        if(fields.length === 0){ return ''; }
        
        msg = msg.replace('%NAME%',fields.join(', '));
        
        msg = msg.replace('%FIELD%',(fields.length === 1) ? '' : 's');
        
        msg = msg.replace('%VERB%',(fields.length === 1) ? 'is' : 'are'); 
            
        return msg;
    },
    save: function(){
        vcard.form = $('form').serializeArray();
        
        var required_check_output = vcard.required_check();
        
        if(required_check_output !== ''){
            alert(required_check_output);
            return;
        }
        
        vcard.add_you();
        
        vcard.add_address();
        
        vcard.add_tel();
        
        vcard.add_email();
        
        vcard.add_url();
        
        vcard.add_work();
        
        vcard.add_social();
        
        vcard.str_vcard += vcard.str_end;
        
        $('textarea[name="vcard"]').val(vcard.str_vcard);
     
        $('#qr').attr('src',vcard.goog_chart+vcard.str_vcard.replace(/\n/g,'%0A'));
        
        vcard.str_vcard = vcard.str_start;
    }
};

$(function(){
    $('input[name="submit"]').click(vcard.save);
});




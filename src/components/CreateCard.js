import React, { Component } from 'react';

class CreateCard extends Component {
    constructor() {
        super();
        this.state = {

            vcard: {
                str_start:'BEGIN:VCARD\nVERSION:3.0\n',
                str_vcard:'BEGIN:VCARD\nVERSION:3.0\n',
                str_end:'\nEND:VCARD',
                goog_chart:'http://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=',
                form:[],
                get_field: function(field){
                    for(var i in this.vcard.form){
                        if(this.vcard.form[i].name === field){ 
                            return this.vcard.form[i].value.replace(/^\s+|\s+$/g,"");
                        } 
                    }
                },
                add_you: function(){
                    var first_name = this.vcard.get_field("first_name"),
                        last_name = this.vcard.get_field("last_name"),
                        birthday = this.vcard.get_field('birthday'),
                        gender = this.vcard.get_field('gender');
                    
                        this.vcard.str_vcard += 'N:'+last_name+';'+first_name+'\n'+
                                        'FN:'+first_name+' '+last_name;
                    // TODO convert date to american format
                    if(birthday !== ''){ this.vcard.str_vcard += '\nBDAY:'+birthday; }
                    
                    if(gender !== ''){ this.vcard.str_vcard += '\nX-GENDER:'+gender; }
                },
                add_address: function(){
                    var home_street = this.vcard.get_field("home_street"),
                        home_city = this.vcard.get_field("home_city"),
                        home_region = this.vcard.get_field("home_region"),
                        home_post = this.vcard.get_field("home_post"),
                        home_country = this.vcard.get_field("home_country"),
                        org_street = this.vcard.get_field("org_street"),
                        org_city = this.vcard.get_field("org_city"),
                        org_region = this.vcard.get_field("org_region"),
                        org_post = this.vcard.get_field("org_post"),
                        org_country = this.vcard.get_field("org_country");
                    
                    if(home_street+home_city+home_region+home_post+home_country !== ''){
                        this.vcard.str_vcard += '\nADR;TYPE=home:;;'+home_street+';'+home_city+';'+home_region+
                                        ';'+home_post+';'+home_country;
                    }
                    if(org_street+org_city+org_region+org_post+org_country !== ''){
                        this.vcard.str_vcard += '\nADR;TYPE=work:;;'+org_street+';'+org_city+';'+org_region+
                                        ';'+org_post+';'+org_country;
                    }
                }, 
                add_tel: function(){
                var home = this.vcard.get_field("home_tel"),
                    work = this.vcard.get_field("org_tel");
                    
                    if(home !== ''){ this.vcard.str_vcard += '\nTEL;TYPE=home:'+home; }
                    
                    if(work !== ''){ this.vcard.str_vcard += '\nTEL;TYPE=work:'+work; }
                },
                add_email: function(){
                var home = this.vcard.get_field("home_email"),
                    work = this.vcard.get_field("org_email");
                    
                    if(home !== ''){ this.vcard.str_vcard += '\nEMAIL;TYPE=internet,home:'+home; }
                    
                    if(work !== ''){ this.vcard.str_vcard += '\nEMAIL;TYPE=internet,work:'+work; }
                },
                add_url: function(){
                var home = this.vcard.get_field("home_url"),
                    work = this.vcard.get_field("org_url");
                    
                    if(home !== ''){ this.vcard.str_vcard += '\nURL;TYPE=home:'+home; }
                    
                    if(work !== ''){ this.vcard.str_vcard += '\nURL;TYPE=work:'+work; }
                },
                add_work: function(){
                var name = this.vcard.get_field("org_name"),
                    title = this.vcard.get_field("org_title");
                    
                    if(name !== ''){ this.vcard.str_vcard += '\nORG:'+name; }
                    
                    if(title !== ''){ this.vcard.str_vcard +='\nTITLE:'+title; }
                },
                add_social: function(){
                var facebook = this.vcard.get_field("facebook"),
                    twitter = this.vcard.get_field("twitter"),
                    youtube = this.vcard.get_field("youtube"),
                    skype = this.vcard.get_field("skype"),
                    flickr = this.vcard.get_field("flickr");
                    
                    if(facebook !== 'http://www.facebook.com/'){ this.vcard.str_vcard += '\nsocialProfile;type=facebook:'+facebook; }
                    
                    if(twitter !== 'http://www.twitter.com/'){ this.vcard.str_vcard +='\nsocialProfile;type=twitter:'+twitter; }
                    
                    if(flickr !== 'http://www.flickr.com/'){ this.vcard.str_vcard +='\nalbum;type=photo:'+flickr; }
                    
                    if(youtube !== 'http://www.youtube.com/'){ this.vcard.str_vcard +='\nX-SKYPE:'+youtube; }
                    
                    if(skype !== ''){ this.vcard.str_vcard +='\nalbum;type=video:'+skype; }
                }, 
                required_check: function(){
                    var first_name = this.vcard.get_field("first_name"),
                        last_name = this.vcard.get_field("last_name"),
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
                    this.vcard.form = $('form').serializeArray();
                    
                    var required_check_output = this.vcard.required_check();
                    
                    if(required_check_output !== ''){
                        alert(required_check_output);
                        return;
                    }
                    
                    this.vcard.add_you();
                    
                    this.vcard.add_address();
                    
                    this.vcard.add_tel();
                    
                    this.vcard.add_email();
                    
                    this.vcard.add_url();
                    
                    this.vcard.add_work();
                    
                    this.vcard.add_social();
                    
                    this.vcard.str_vcard += this.vcard.str_end;
                    
                    $('textarea[name="vcard"]').val(this.vcard.str_vcard);
                
                    $('#qr').attr('src',this.vcard.goog_chart+this.vcard.str_vcard.replace(/\n/g,'%0A'));
                    
                    this.vcard.str_vcard = this.vcard.str_start;
                }
            }


        }
    }

    save = () => {
        $('input[name="submit"]').click(vcard.save);
    };
    render() {
        return (
            <div>
                <button onClick={this.save}>Save</button>
            </div>
        );
    }
}

export default CreateCard;
/**
 * @file   mofron-comp-googlesignin/index.js
 * @author simpart
 */
let mf     = require('mofron');
let Text   = require('mofron-comp-text');
let Signin = require('mofron-comp-socialsignin');
let Svg    = require('mofron-comp-svg');
let logo_svg = require('./logo.svg');

/**
 * @class mofron.comp.{@Comp-name}
 * @brief google signin button component for mofron
 */
mf.comp.GoogleSignin = class extends Signin {
    
    constructor (po) {
        try {
            super();
            this.name('GoogleSignin');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @param prm : 
     */
    initDomConts (prm) {
        try {
            super.initDomConts();
            this.color(new mf.Color(255,255,255));
            this.shadow(1);
            this.addChild(
                new Svg({
                    setContents : logo_svg,
                    size : new mf.Param(45,45)
                })
            );
            
            if (undefined === prm) {
                this.text(
                    new Text({
                        text   : 'Sign in with Google',
                        weight : 700,
                        color  : new mf.Color(150,150,150)
                    })
                );
            } else {
                this.text(prm);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.GoogleSignin;
/* end of file */

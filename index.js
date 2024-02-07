/**
 * @file mofron-comp-googlesignin/index.js
 * @brief google signin button component for mofron
 * @license MIT
 */
const SVG   = require('mofron-comp-svg');
const Click = require('mofron-event-click');
const Dom   = mofron.class.Dom;
require("./index.css");

module.exports = class extends mofron.class.Component {
    /**
     * initialize component
     * 
     * @param (mixed) 
     *                key-value: component config
     * @short 
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("GoogleSignin");
	    this.shortForm("text");
            
	    /* init config */
	    this.confmng().add('clickEvent', { type:'event', list:true });

	    if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts('button');
            this.childDom().class('gsi-material-button');
	    this.childDom().child(new Dom({ tag:'div', class:'gsi-material-button-state' }));
	    let wrapper = new Dom({ tag:'div', class:'gsi-material-button-content-wrapper' });
	    let icon    = new Dom({ tag:'div', class:'gsi-material-button-icon' });
	    wrapper.child([
	        icon,
		new Dom({ tag:'span', class:'gsi-material-button-contents', text:'Sign in with Google' }),
		new Dom({
		    tag:'span', class:'gsi-material-button-icon',
		    text:'Sign in with Google', style:{ display:'none' }
		})
            ]);
            this.childDom().child(wrapper);
            this.childDom(icon);
            
	    let svg = new SVG({ svgConf: { viewBox:"0 0 48 48" } });
	    svg.addPath({ fill:"#EA4335", d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" });
            svg.addPath({ fill:"#4285F4", d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" });
            svg.addPath({ fill:"#FBBC05", d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" });
            svg.addPath({ fill:"#34A853", d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" });
            svg.addPath({ fill:"none", d:"M0 0h48v48H0z" });
	    this.child(svg);
            
	    this.childDom(this.rootDom()[0]);
            this.styleDom(this.rootDom()[0]);
            let click_evt = (c1,c2,c3) => {
                try {
                    let evt = c3.clickEvent();
		    for (let eidx in evt) {
                        evt[eidx][0](c3,c2,evt[eidx][1]);
		    }
		} catch (e) {
                    console.error(e.stack);
	            throw e;
		}
	    };
	    this.event(new Click(new mofron.class.ConfArg(click_evt,this)));
            
	    this.size('2rem','0.35rem');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    clickEvent (fnc, prm) {
        try {
            if (undefined === fnc) {
                return this.confmng('clickEvent');
	    }
	    this.confmng('clickEvent', [fnc,prm]);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
}
/* end of file */

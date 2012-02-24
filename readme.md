[jQuery clear input](http://github.com/thijsdamen/jquery-clearinput/)
==================================================

About this plugin
--------------------------------------

This plugin was created to clearn input fields when focused. It is custom these days to use a placeholder value in an input field. And for every single you you needed 3 or 4 lines of code.
No more, mostly to suit my own needs and hopefully someone else's this plugin was created.

Goals of the plugin
--------------------------------------
Make it <b>very</b> easy to clear input fields with placeholder values.

Basic Usage
--------------------------------------
Default settings:

    $('#form').clearInput();
    
Customized settings:

	// All settings are explained in code (also below)
    $('#form').clearInput({
    	clearTextFields: true,
    	clearPasswordFields: false,
    	clearTextAreas: true,
        clearAll: false 
    });
    
    
    
Options
--------------------------------------
```clearTextFields```: true/false<br />
<i>Whether or not <input type="text" /> elements should be cleared/replaced.</i>

```clearPasswordFields```: true/false<br />
<i>Whether or not <input type="password" /> elements should be cleared/replaced.</i>

```clearTextAreas```: true/false<br />
<i>Whether or not <textarea /> elements should be cleared/replaced.</i>
    
```clearAll```: true/false<br />
<i>if ```true``` it will ignore the ```clearClassName``` setting and clear all elements in the form. Still respects ```clearTextFields```, ```clearPasswordFields``` and ```clearTextAreas```</i>

```clearClassName```: (string)<br />
<i>customize the classname of fields that need to be cleared. default: ```clear-input```</i>

```replaceValues```: true/false<br />
<i>if ```true``` it will try to replace fields that still contain their placeholder value with a preset value (based on ```replaceValueDataName```)</i>

```replaceValueDataName```: (string)<br />
<i>customize the data-* field of fields whos value will be replaced. default: ```replace-width```</i>
<i>example: <input type="text" value="green" name="color" data-replace-width="red" /> ```green``` will be replaced by ```red``` if the value of the field is ```green``` on submit</i>

```valueStorageDataName```: (string)<br />
<i>customize the data-* field where placeholder values are stored. default: ```default-value```</i>

```clearOnSubmit```: true/false<br />
<i>Whether form fields that contain their default value should be emptied. Won't clear replaced values</i>

Functionality
--------------------------------------
- Empty a form field when focused (if placeholder value is still entered)
- Repopulate form field if blurred (if no value was entered)
- Submit empty values (if placeholder value is still entered)
- Submit custom values (if placeholder value is still entered)

Requirements
--------------------------------------
[jQuery](http://jquery.com/) 1.4.4+
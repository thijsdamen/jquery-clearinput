/*
 * jQuery ClearInput Plugin
 * 
 * Clears default values from input fields on submit.
 * 
 * Version: 0.1, 24 February, 2012
 * Author: Thijs Damen <http://thijsdamen.nl, http://twitter.com/@/thijsdamen>
 */
(function($) {

    $.clearInput = function(element, options) {

        var defaults = {
            clearTextFields:             true,            // if true clears text fields
            clearPasswordFields:         true,            // if true clears password fields
            clearTextAreas:              true,            // if true clears textareas
            clearAll:                    true,            // Ignores the class name setting and clears all fields regardless of class (still respects clearTextFields, clearPasswordFields and clearTextFields settings)
            clearClassName:              'clear-input',   // Default class name for elements to be cleared
            replaceValues:               true,            // Whether or not fields that have not been entered should be replaced
            replaceValueDataName:        'replace-with',  // Default data-* value to replace non-entered values with (only applies if replaceValues is true)
            valueStorageDataName:        'default-value', // Default data-* name script will store values to.
            clearOnSubmit:               true             // Wheter or not default form values should be emptied before submit (still replaces values if replaceValues is true)
        }

        // current instance of the object
        var plugin = this;
        plugin.settings = {}

        // References to the element plugin is attached to
        var $element = $(element), 
             element = element;    
        
        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options);
            
            // Plugin only works on forms
            if (!$element.is('form')) {
                return;
            }

            $('input, textarea', $element).each(function(index, formElement) {
                $formElement = $(formElement);
                clearElement($formElement);
            });
              
            $element.submit(function() {
                $('input, textarea', $element).each(function(index, formElement) {
                    $formElement = $(formElement);
                    replaceElementValue($formElement);
                });
                return true;
            });
        }
        
        var clearElement = function($formElement) { 
            if (plugin.settings.clearAll || $formElement.hasClass(plugin.settings.clearClassName)) {
                if (($formElement.attr('type') == 'text' && plugin.settings.clearTextFields)
                || ($formElement.attr('type') == 'password' && plugin.settings.clearPasswordFields)
                || ($formElement.is('textarea') && plugin.settings.clearTextAreas)) {
                    $formElement.data(plugin.settings.valueStorageDataName, $formElement.val());
                   
                    $formElement.focus(function() {
                        $focusedElement = $(this);
                        if ($focusedElement.val() == $focusedElement.data(plugin.settings.valueStorageDataName)) {
                            $focusedElement.val('');
                        }                               
                    });
                   
                    $formElement.blur(function() {
                        $blurredElement = $(this);
                        if ($blurredElement.val().length == 0) {
                            $blurredElement.val($blurredElement.data(plugin.settings.valueStorageDataName));
                        }
                    });
                }
            }
        }
        
        var replaceElementValue = function($formElement) {
            if (($formElement.attr('type') == 'text' && plugin.settings.clearTextFields)
            || ($formElement.attr('type') == 'password' && plugin.settings.clearPasswordFields)
            || ($formElement.is('textarea') && plugin.settings.clearTextAreas)) {
                if ($formElement.val() == $formElement.data(plugin.settings.valueStorageDataName)) {
                    if (plugin.settings.replaceValues && $formElement.data(plugin.settings.replaceValueDataName)) {
                        $formElement.val($formElement.data(plugin.settings.replaceValueDataName));
                    } else if (plugin.settings.clearOnSubmit) {
                        $formElement.val('');
                    }
                }
            }
        }
        
        plugin.init();
    }

    $.fn.clearInput = function(options) {
        return this.each(function() {
            if (undefined == $(this).data('clearInput')) {
                var plugin = new $.clearInput(this, options);
                $(this).data('clearInput', plugin);
            }
        });
    }
})(jQuery);
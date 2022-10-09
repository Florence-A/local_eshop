
module.exports = {

    toUpperCaseFirstLetter : (string) => {

        str = string.toLowerCase();
        s = str.trim();
        return s.charAt(0).toUpperCase() + s.slice(1);
    
    },
    

      
    escapeHtml : (string) => {
            
        // HTMLSpecialChars version Javascript
        var entityMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;',
        '' : '&#x60;',
        '=': '&#x3D;'
        };

      return String(string).replace(/[&<>"'=/]/g, function (s) {
        return entityMap[s];
      });
      
    }

}


( function( root, factory ) {
	if ( typeof define === 'function' && define.amd ) {
		// AMD.
		define( [], factory );
	} else if ( typeof module === 'object' && module.exports ) {
		// Node.
		module.exports = factory();
	} else {
		// Browser globals (root is window)
		root.eloipw1 = factory();
	}
} ( this, function() {
	var start, final, regex,
	// Digraphs must be before all other letters because of Latin to Cyrillic transliteration
	cyrillic = [ 'Љ', 'Љ', 'Њ',  'Њ', 'Џ', 'Џ', 'А', 'Б', 'В', 'Г', 'Д', 'Ђ', 'Е', 'Ж', 'З', 'И', 'Ј', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'Ћ', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'љ', 'њ', 'џ', 'а', 'б', 'в', 'г', 'д', 'ђ', 'е', 'ж', 'з', 'и', 'ј', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'ћ', 'у', 'ф', 'х', 'ц', 'ч', 'ш' ],
	latin = [ 'Lj', 'LJ', 'Nj', 'NJ', 'Dž', 'DŽ', 'A', 'B', 'V', 'G', 'D', 'Đ', 'E', 'Ž', 'Z', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'Ć', 'U', 'F', 'H', 'C', 'Č', 'Š', 'lj', 'nj', 'dž', 'a', 'b', 'v', 'g', 'd', 'đ', 'e', 'ž', 'z', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'ć', 'u', 'f', 'h', 'c', 'č', 'š' ];

	var convert = function( string ) {
		for ( index = 0; index < start.length; ++index ) {
			regex = new RegExp( start[index], "g" );
			string = string.replace( regex, final[index] );
		}

		return string;
	};

	return {
		toLatin: function( original ) {
			start = cyrillic;
			final = latin;

			return convert( original );
		},
		toCyrillic: function( original ) {
			start = latin;
			final = cyrillic;

			return convert( original );
		}
	}
} ) );

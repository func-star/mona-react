class DOMPropertyConfig {
	events = [
		'onClick',
		'onCopy', 'onCut', 'onPaste',
		'onCompositionEnd', 'onCompositionStart', 'onCompositionUpdate',
		'onKeyDown', 'onKeyPress', 'onKeyUp',
		'onFocus', 'onBlur',
		'onChange', 'onInput', 'onSubmit',
		'onClick', 'onContextMenu', 'onDoubleClick', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit',
		'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave',
		'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp',
		'onSelect',
		'onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart'
	]
	eventsObj = {}
	list = [
		'accept', 'acceptCharset', 'accessKey', 'action', 'allowFullScreen', 'allowTransparency', 'alt',
		'async', 'autoComplete', 'autoFocus', 'autoPlay', 'capture', 'cellPadding', 'cellSpacing', 'challenge',
		'charSet', 'checked', 'cite', 'classID', 'className', 'colSpan', 'cols', 'content', 'contentEditable',
		'contextMenu', 'controls', 'coords', 'crossOrigin', 'data', 'dateTime', 'default', 'defer', 'dir',
		'disabled', 'download', 'draggable', 'encType', 'form', 'formAction', 'formEncType', 'formMethod',
		'formNoValidate', 'formTarget', 'frameBorder', 'headers', 'height', 'hidden', 'high', 'href', 'hrefLang',
		'htmlFor', 'httpEquiv', 'icon', 'id', 'inputMode', 'integrity', 'is', 'keyParams', 'keyType', 'kind', 'label',
		'lang', 'list', 'loop', 'low', 'manifest', 'marginHeight', 'marginWidth', 'max', 'maxLength', 'media',
		'mediaGroup', 'method', 'min', 'minLength', 'multiple', 'muted', 'name', 'noValidate', 'nonce', 'open',
		'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'profile', 'radioGroup', 'readOnly', 'rel',
		'required', 'reversed', 'role', 'rowSpan', 'rows', 'sandbox', 'scope', 'scoped', 'scrolling', 'seamless',
		'selected', 'shape', 'size', 'sizes', 'span', 'spellCheck', 'src', 'srcDoc', 'srcLang', 'srcSet', 'start', 'step',
		'style', 'summary', 'tabIndex', 'target', 'title', 'type', 'useMap', 'value', 'width', 'wmode', 'wrap'
	]
	
	getEventName (name) {
		if (this.eventsObj[name]) {
			return this.eventsObj[name]
		}
		if (this.events.indexOf(name) < 0) {
			return
		}
		
		this.eventsObj[name] = name.substring(2).toLowerCase()
		return this.eventsObj[name]
	}
	
	isEvents (name) {
		return this.events.indexOf(name) >= 0
	}
	
	isProperty (name) {
		return this.list.indexOf(name) >= 0
	}
}

export default new DOMPropertyConfig

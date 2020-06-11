/**
 * Paginater ��ҳ
 * @author haichen.ma
 */
Paginater = {
	toPage: function(formIndex, pageIndex) {
		var searchForm = document.forms[formIndex];

		if (!searchForm) {
			return;
		}

		if (!searchForm.elements['pageNumber']) {
			//searchForm.innerHTML += '<input type="hidden" name="pageNumber"/>';
			$(searchForm).append('<input type="hidden" name="pageNumber"/>');
		}

		if (!searchForm.elements['pageSize']) {
			//searchForm.innerHTML += '<input type="hidden" name="pageSize"/>';
			$(searchForm).append('<input type="hidden" name="pageSize"/>');
		}

		searchForm.pageNumber.value = pageIndex;
		searchForm.pageSize.value = this.getPageSize(formIndex);
		var canSubmit = true;
		
		if (searchForm.onsubmit) {
			canSubmit = searchForm.onsubmit();
		}

		if (canSubmit) {
			searchForm.submit();
		}
	},
	
	getPageSize: function(formIndex) {
		var searchForm = document.forms[formIndex];
		var pagesize = searchForm.pageSize.value;;

		if (pagesize.trim().length == 0 || !pagesize.isNumber()) {
			return 20;
		}
		else {
			return pagesize;
		}
	},
	
	goPage: function(formIndex) {
		var searchForm = document.forms[formIndex];
		var pageIndex = searchForm.goPageIndex.value;
	
		if (pageIndex.trim().length == 0 || !pageIndex.isNumber()) {
			return;
		}
		
		this.toPage(formIndex, pageIndex);
	},
	
	/**
	 * �س���ת��ĳҳ.
	 * @param {} formIndex
	 */
	keyToPage: function(formIndex, evt) {
		if (window.event.keyCode == 13) {
			this.goPage(formIndex);
		}
		
		var e = evt ? evt : window.event;
		if (window.event) {
			e.cancelBubble=true;
		} else {
			e.stopPropagation();
		}
	}
}

String.prototype.isNumber = function() {
	if (this !== "") {
		return /^([0-9]*)$/.test(this);
	}
};

String.prototype.trim = function() {
		return this.replace(/(^\s*)|(\s*$)/g, "");
};
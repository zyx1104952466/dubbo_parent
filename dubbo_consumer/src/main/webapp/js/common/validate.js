
/***********************************************************
	Validator: ������֤��
 ***********************************************************/
/**
 * ������֤��.
 * 
 * @constructor
 * @version 1.0
 * @author haichen.ma
 * @date 2008-01-28
 */
Validator = function() {
	/**
	 * ��֤�Ƿ�Ϊȫ����.
	 * 
	 * @param value ����ֵ֤
	 * @return �Ƿ�Ϊȫ����
	 * @type boolean
	 *
	 * @author haichen.ma
	 * @date 2008-01-28
	 */
	this.isDigit = function(value) {
		return /^([0-9]*)$/.test(value);
	};

	/**
	 * ��֤�Ƿ�Ϊ���ֺʹ�Сд��ĸ���.
	 * 
	 * @param value ����ֵ֤
	 * @return �Ƿ�Ϊ���ֺʹ�Сд��ĸ���
	 * @type boolean
	 * 
	 * @author haichen.ma
	 * @date 2008-01-28
	 */
	this.isDigitOrLetter = function(value) {
		return /^([0-9a-zA-Z]*)$/.test(value);
	};

	/**
	 * ��֤�Ƿ�Ϊ������С��.
	 * 
	 * @param value ����ֵ֤
	 * @return �Ƿ�Ϊ������С��
	 * @type boolean
	 * 
	 * @author haichen.ma
	 * @date 2008-01-28
	 */
	this.isDecimal = function(value) {
		return /^\d*(\.\d+)?$/.test(value);
	};

	/**
	 * ��֤�Ƿ�Ϊ��������.
	 * �����������ָ�ʽ������1000���Ժ������:
	 * <ul>
	 *	<li><code>yyyyMMdd</code></li>
	 *	<li><code>yyyy/MM/dd</code></li>
	 *	<li><code>yyyy-MM-dd</code></li>
	 * </ul>
	 * 
	 * @param value ����ֵ֤
	 * @return �Ƿ�Ϊ��������
	 * @type boolean
	 * 
	 * @author haichen.ma
	 * @date 2008-01-28
	 */
	this.isDate = function(value) {
		/* �жϸ�ʽ */
		if (!/^\d{4}([-]?\d{2}){2}|\d{4}([\/]?\d{2}){2}$/.test(value)) {
			return false;
		}
		
		var year = null;
		var month = null;
		var day = null;

		/* ��ȡ�����ղ��� */
		if (value.length == 8) {
			year = value.substr(0, 4);
			month = value.substr(4, 2);
			day = value.substr(6, 2);
		}
		else if (value.length == 10) {
			year = value.substr(0, 4);
			month = value.substr(5, 2);
			day = value.substr(8, 2);
		}
		else {
			return false;
		}

		/* �ж����ڷ�Χ */
		if (year < 1000 
			|| (month < 1 || month > 12) 
			|| (day < 1 || day > 31)) {
			return false;
		}

		/* �ж��Ƿ�����ȷת��Ϊ���� */
		var date = new Date(year, month - 1, day);

		if (date.getFullYear() != year
			|| date.getMonth() != month - 1
			|| date.getDate() != day) {
			return false;
		}

		return true;
	};
};

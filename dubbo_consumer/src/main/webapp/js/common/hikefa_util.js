var ClientBrower = {};
var ua = navigator.userAgent.toLowerCase();
var type;
(type = ua.match(/msie ([\d.]+)/)) ? ClientBrower.ie = type[1] :
(type = ua.match(/firefox\/([\d.]+)/)) ? ClientBrower.firefox = type[1] :
(type = ua.match(/chrome\/([\d.]+)/)) ? ClientBrower.chrome = type[1] :
(type = ua.match(/opera.([\d.]+)/)) ? ClientBrower.opera = type[1] :
(type = ua.match(/version\/([\d.]+).*safari/)) ? ClientBrower.safari = type[1] : 0;

function SystemConstant() {}
SystemConstant.style = new Array();
SystemConstant.style.display = new Array();
SystemConstant.style.display.none = "none";
SystemConstant.style.display.inherit = ClientBrower.ie?"":"inherit";

/**
 * ͨ��id��ȡ������
 * @param {string} id ��id
 * @return {Object} ������
 */
function getFormById(id) {
	return document.getElementById(id);
}
/**
 * �Ѷ���Ӳ������Ƴ���
 * @param {string} id ����id
 */
function removeFromLayout(id) {
	var ele = document.getElementById(id);
	ele.style.display=SystemConstant.style.display.none;
}
/**
 * �Ѷ�����벼�֡�
 * @param {string} id ����id
 */
function resumeToLayout(id) {
	var ele = document.getElementById(id);
  	ele.style.display=SystemConstant.style.display.inherit;
}

/**
 * <b>ע�⣺</b>ʹ����CONTEXT_PATH��ʹ��ǰ��Ҫ����/pages/common/sys.jsp��<br/>
 * ��ʼ��һ����̬����Ĭ�ϴ�С�ǳ�������ܡ�
 * @param {string} elementId �����ID
 * @param {string} rootElement ���ڵ�ֵ
 * @return {dhtmlXTreeObject} ����õ�������
 */
function initXTree(elementId, rootElement) {
	var tree = new dhtmlXTreeObject(elementId,"100%","100%",rootElement);
	tree.enableCheckBoxes(true);
	tree.enableThreeStateCheckboxes(true);
	tree.setImagePath(CONTEXT_PATH+"/js/plugin/dhtmltree.2.6/imgs/");
	return tree;
}
function getArray(data,callback) {
	var ar;
	eval("ar = new Array("+data+")");
	callback(ar);
}

/**
 * ��ȡ��̬����ѡ�еĽڵ㡣
 * ԭ���Ļ�ȡ����������ѡ��һ��û�������ĸ��ڵ���һ����Ŀʱ����һ�����Ԫ��Ϊ���ַ��������顣
 * @param {dhtmlXTreeObject} tree Ҫ��ȡ�ڵ����
 * @return {Array} ����ѡ�нڵ������
 */
function getSelectTreeNode(tree){
	var acb = tree.getAllCheckedBranches();
	var ids = acb.split(tree.dlmtr);
	if (ids[ids.length-1] == "") {
		ids.pop();
	}
	return ids;
}

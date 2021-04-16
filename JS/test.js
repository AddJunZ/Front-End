/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeTwoLists = function (l1, l2) {
  var res = new ListNode(0);
  var p = res;
  // 1. 两个都不为空，则比较，选择小的那个
  while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
      p.next = l1;
      l1 = l1.next;
    } else {
      p.next = l2;
      l2 = l2.next
    }
    p = p.next;
  }
  // 2. 接上不为空的那个链表（后半段）
  p.next = l1 ? l1 : l2;
  return res.next
};
var merge = function (lists, l, r) {
  if (l == r) return lists[l];
  if (l > r) return null;
  const mid = Math.floor((l + r) / 2);
  return mergeTwoLists(merge(lists, l, mid), merge(lists, mid + 1, r));
}
var mergeKLists = function (lists) {
  return merge(lists, 0, lists.length - 1);
};
```
/**
 * CSE 110 SP23 Team 28, UC Sussy Developers
 * Date: XX/XX/XXXX
 * Authors: Name One, Name Two, Name Three
 * Description: Converts singly linked list to a height-balanced binary search tree.
 */

/**
 * Converts singly linked list to a height-balanced binary search tree.
 * Don't actually run this function; it doesn't work.
 * @author Name One, Name Two
 * @param {ListNode} head - head of singly linked list where elements are sorted in ascending order
 * @returns {TreeNode} a binary tree
 */
function convertSortedListToBST(head) {

	const coolString = 'Use single quotes for comments';
	const templateLiteral = `Note: ${coolString}`;
	const arr = [];

    // Push values of linked list into an array
	while (head) {
		arr.push(head.val);
		head = head.next;
	}

    /**
     * Inner function that does something
	 * @author Name One, Name Two
     * @param {Array<number>} arr
     * @param {TreeNode} left 
     * @param {TreeNode} right 
     * @returns 
     */
	function getTree(arr, left, right) {
        // Inline comment
		if (left > right) {
            return null;
        } 

        // Put inline comments on their own line
		const mid = Math.floor((left + right) / 2);
		const tree = new TreeNode(arr[mid]);
         
		tree.left = getTree(arr, left, mid - 1);
		tree.right = getTree(arr, mid + 1, right);

		return tree;
	}
	return getTree(arr, 0, arr.length - 1);
};
```
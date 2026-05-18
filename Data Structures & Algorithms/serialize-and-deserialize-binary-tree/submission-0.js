/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        let serilized = [];

        function serializing(root) {
            if (!root) {
                serilized.push("N");
                return;
            }
            serilized.push(String(root.val));
            serializing(root.left);
            serializing(root.right);
        }
        serializing(root);
        return serilized.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        let deserialized = data.split(',');
        let idx = 0;
        function deserializing() {
            if (deserialized[idx] === "N") {
                idx = idx+1;
                return null;
            }
            let node = new TreeNode(Number(deserialized[idx]));
            idx = idx+1
            node.left = deserializing();
            node.right = deserializing();

            return node;
        }

        return deserializing()
    }
}

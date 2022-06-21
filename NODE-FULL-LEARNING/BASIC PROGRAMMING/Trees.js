const tree = (root) => {
    if(root === null){
        return [];
    }

    const result = [];
    if(root.left !== null) {
        result.push(...inorder(root.left))
    }
    root.push(root.val);
    if(root.right !== null) { result.push(...inorder(root.right))}

    return result;
}
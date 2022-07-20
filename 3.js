function numberOfBinaryTreeTopologies(numOfNodes) {
    if (numOfNodes == 1) {
        return 1; 
    }

    numOfNodes = numOfNodes - 1;
    return ((numberOfBinaryTreeTopologies(numOfNodes) * (2*numOfNodes+2) * (2*numOfNodes+1))/((numOfNodes+1)*(numOfNodes+2)));
}

exports.numberOfBinaryTreeTopologies = numberOfBinaryTreeTopologies;

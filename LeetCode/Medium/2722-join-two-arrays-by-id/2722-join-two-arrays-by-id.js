var join = function(arr1, arr2) {
    const idMap = {};

    // arr1의 객체들을 idMap에 추가
    arr1.forEach(obj => {
        idMap[obj.id] = {...obj};
    });

    // arr2의 객체들을 idMap에 추가하면서, 필요한 경우 기존 값과 병합
    arr2.forEach(obj => {
        if (idMap[obj.id]) {
            // 중복된 id에 대해 arr2의 값을 우선적으로 사용
            idMap[obj.id] = {...idMap[obj.id], ...obj};
        } else {
            // 새로운 id, 객체를 그대로 추가
            idMap[obj.id] = {...obj};
        }
    });

    // idMap에서 값들만 추출하여 id 기준으로 정렬
    const joinedArray = Object.values(idMap).sort((a, b) => a.id - b.id);
    
    return joinedArray;
}

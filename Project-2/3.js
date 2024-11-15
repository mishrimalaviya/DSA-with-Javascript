let arr = [1, 2, 3, 4, 5];
let sort = true;

for (let i = 0; i < arr.length - 1; i++) {

        for (let j = 0; j < arr.length - 1; j++) {

                if (arr[j] > arr[j + 1]) {
                        let tem = arr[j];
                        arr[j] = arr[j + 1]
                        arr[j + 1] = tem;

                        sort = false
                }

        }
        if (sort) {
                break;
        }
}
console.log(sort);
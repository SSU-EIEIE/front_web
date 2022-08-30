interface CoorArr {
    index: number[];
}
interface ResponseData {
    geometry: {
        coordinates: CoorArr[];
        type: string;
    };
    properties: {
        totalTime: number;
    };
}

export async function getLineString(features: ResponseData[]) {
    let arr = [];
    for (let i = 0; i < Object.keys(features).length; i++) {
        if (features[i].geometry.type === "LineString") {
            arr.push(features[i].geometry.coordinates);
        }
    }
    let pushArr: any = [];
    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            pushArr = [...pushArr, ...arr[i]];
        }
    }

    return pushArr;
}

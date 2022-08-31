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

export async function getTotalTime(features: ResponseData[]) {
    let time = 0;

    for (let i = 0; i < Object.keys(features).length; i++) {
        if (features[i].properties.totalTime) {
            time = features[i].properties.totalTime;

            return time;
        }
    }

    return time;
}

export async function getTotalDistance(features: ResponseData[]) {
    let distance = 0;

    for (let i = 0; i < Object.keys(features).length; i++) {
        if (features[i].properties.totalTime) {
            distance = features[i].properties.totalTime;

            return distance;
        }
    }

    return distance;
}

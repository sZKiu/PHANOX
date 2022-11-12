export default function mergeRepeatedObject(list, { last = false } = {}) {
  let convined = [];
  let repeatedObject = [];
  let repeatedAct = [];
  let repeatedId = [];
  let repeatedData = [];
  let oneTime = true;
  let oneTime2 = true;
  let oneTime3 = true;
  let prevKey = [];
  let actKey = [];
  let prevEn = [];
  let actEn = [];
  let readyAct = [];

  if (!last){
    let genericID = list.map((el, ind) => {
      return el.id;
    });

    genericID.sort((a, b) => a - b);

    genericID.forEach((idActual, ind) => {
      repeatedObject.push({ id: idActual, repeat: false, count: 1 });
      if (repeatedObject[ind - 1] !== undefined) {
        let idAnterior = repeatedObject[ind - 1];
        if (idActual === idAnterior.id) {
          idAnterior.repeat = true;
          repeatedObject[ind].count += 1;
        }
      }
    });

    repeatedObject.forEach((el, ind) => {
      if (el.repeat === true && el.count === 1) {
        repeatedId.push(el.id);
      }
    });

    list.forEach((el, ind) => {
      repeatedId.forEach((id) => {
        if (el.id === id) {
          repeatedData.push(el);
        }
      });
    });

    repeatedData.forEach((el, indexed, all) => {
      const lastEl = all[indexed - 1];
      const firsEl = all[0];

      if (lastEl !== undefined) {
        if (el.id === lastEl.id) {
          prevKey.push(Object.keys(lastEl));
          actKey.push(Object.keys(el));
          actEn.push(Object.entries(el));
          prevEn.push(Object.entries(lastEl));
        }
      }
    });

    actEn.forEach((actEl, actind) => {
      actEl.forEach((el, ind, all) => {
        if (!prevKey[actind]?.includes(`${el[0]}`)) {
          prevEn[actind].push(el);

          if (prevEn[actind + 1] !== undefined) {
            if (oneTime) {
              const convinedObj = Object.fromEntries(prevEn[actind]);
              const convinedObjNext = Object.fromEntries(prevEn[actind + 1]);
              convinedObj.id === convinedObjNext.id
                ? (oneTime = false)
                : (oneTime = true);
              convined.push(convinedObj);
            }
          }

          if (prevEn[actind - 1] !== undefined) {
            prevEn[actind - 1].push(el);
            const convinedObj = Object.fromEntries(prevEn[actind]);
            const convinedObjPrev = Object.fromEntries(prevEn[actind - 1]);

            if (convinedObjPrev.id === convinedObj.id) {
              let convinedArrPrev = Object.entries(convinedObjPrev);
              let convinedArr = Object.entries(convinedObj);

              if (convinedArrPrev.length !== convinedArr.length) {
                oneTime2 = false;
                convined.push(convinedObjPrev);
              }
            }
            if (oneTime2) {
              convined.push(convinedObj);
            }
            oneTime2 = true;
          }
        }
      });
    });

    convined.forEach((el, ind, all) => {
      repeatedAct.push({ ...el, repeat: false, count: 1 });
      let idActAnterior = repeatedAct[ind - 1];
      let idAct = repeatedAct[ind];

      if (idActAnterior !== undefined) {
        let idActAnteriorArr = Object.entries(idActAnterior);
        let idActArr = Object.entries(idAct);

        if (idActAnterior.id === el.id) {
          idActAnterior.repeat = true;
          idAct.count += 1;
        }
      }
    });

    repeatedAct.forEach((el, ind) => {
      if (
        (el.repeat === false && el.count === 2) ||
        (el.repeat === false && el.count === 1)
      ) {
        let readyActNon = Object.entries(el);
        readyActNon.length = readyActNon.length - 2;
        readyAct.push(Object.fromEntries(readyActNon));
      }
    });

    const idsToDelete = readyAct.map((el, ind) => {
      return el.id;
    });

    let idsRepeateds = genericID.map((el, ind, all) => {
      const current = el;
      const prev = all[ind - 1];

      if (prev !== undefined) {
        if (current === prev) {
          return current;
        }
      }
    });

    let genericId = new Set(genericID);
  genericId = [...genericId];
  idsRepeateds.sort((a, b) => a - b);
  idsToDelete.sort((a, b) => a - b);
  idsRepeateds = new Set(idsRepeateds);
  const idsRepeated = [...idsRepeateds];
  idsRepeated.pop();
  const idsRepeatOne = [];
  const idsNonRepeated = [];
  let repeatedOneList = [];
  let repeatedOneListTrue = [];

  idsRepeated.forEach((el, ind, all) => {
    if (el !== undefined) {
      if (!idsToDelete.includes(el)) {
        idsRepeatOne.push(el);
      }
    }
  });

  genericId.forEach((el, ind) => {
    if (el !== undefined) {
      if (!idsRepeated.includes(el)) {
        idsNonRepeated.push(el);
      }
    }
  });

  let nonRepeatedList = list.map((el, ind) => {
    if (idsNonRepeated.includes(el.id)) {
      return el;
    }

    if (idsRepeatOne.includes(el.id)) {
      repeatedOneList.push(el);
    }
  });

  nonRepeatedList = new Set(nonRepeatedList);
  nonRepeatedList = [...nonRepeatedList];

  repeatedOneList.forEach((el, ind, all) => {
    const current = el;
    const prev = all[ind - 1];

    if (prev !== undefined) {
      if (oneTime3) {
        repeatedOneListTrue.push(prev);
        oneTime3 = false;
      }

      if (current.id !== prev.id) {
        repeatedOneListTrue.push(current);
      }
    }
  });

  let realList = [...nonRepeatedList, ...repeatedOneListTrue, ...readyAct];

  realList = realList.filter((el, ind) => el !== undefined);

  return realList;
  }

  if (last){
    let genericID = list.map((el, ind) => {
      return el.id;
    });
  
    genericID.sort((a, b) => a - b);
  
    genericID.forEach((idActual, ind) => {
      repeatedObject.push({ id: idActual, repeat: false, count: 1 });
      if (repeatedObject[ind - 1] !== undefined) {
        let idAnterior = repeatedObject[ind - 1];
        if (idActual === idAnterior.id) {
          idAnterior.repeat = true;
          repeatedObject[ind].count += 1;
        }
      }
    });
  
    repeatedObject.forEach((el, ind) => {
      if (el.repeat === true && el.count === 1) {
        repeatedId.push(el.id);
      }
    });
  
    list.forEach((el, ind) => {
      repeatedId.forEach((id) => {
        if (el.id === id) {
          repeatedData.push(el);
        }
      });
    });

    repeatedData = repeatedData.sort((a,b) => a.id - b.id);
  
    repeatedData.forEach((el, ind, all) => {
  
      repeatedAct.push({ ...el, repeat: false, count: 1 });
      let idActAnterior = repeatedAct[ind - 1];
      let idAct = repeatedAct[ind];
  
      if (idActAnterior !== undefined) {
        let idActAnteriorArr = Object.entries(idActAnterior);
        let idActArr = Object.entries(idAct);
  
        if (idActAnterior.id === el.id) {
          idActAnterior.repeat = true;
          idAct.count += 1;
        }
      }
    });
  
    repeatedAct.forEach((el, ind) => {
      if (el.repeat === false && el.count === 2) {
        let readyActNon = Object.entries(el);
        readyActNon.length = readyActNon.length - 2;
        readyAct.push(Object.fromEntries(readyActNon));
      }
    });
  
    const idsToDelete = readyAct.map((el, ind) => {
      return el.id;
    });
  
    let idsRepeateds = genericID.map((el, ind, all) => {
      const current = el;
      const prev = all[ind - 1];
  
      if (prev !== undefined) {
        if (current === prev) {
          return current;
        }
      }
    });
  
    let genericId = new Set(genericID);
    genericId = [...genericId];
    idsRepeateds.sort((a, b) => a - b);
    idsToDelete.sort((a, b) => a - b);
    idsRepeateds = new Set(idsRepeateds);
    const idsRepeated = [...idsRepeateds];
    idsRepeated.pop();
    const idsRepeatOne = [];
    const idsNonRepeated = [];
    let repeatedOneList = [];
    let repeatedOneListTrue = [];
  
    idsRepeated.forEach((el, ind, all) => {
      if (el !== undefined) {
        if (!idsToDelete.includes(el)) {
          idsRepeatOne.push(el);
        }
      }
    });
  
    genericId.forEach((el, ind) => {
      if (el !== undefined) {
        if (!idsRepeated.includes(el)) {
          idsNonRepeated.push(el);
        }
      }
    });
  
    let nonRepeatedList = list.map((el, ind) => {
      if (idsNonRepeated.includes(el.id)) {
        return el;
      }
  
      if (idsRepeatOne.includes(el.id)) {
        repeatedOneList.push(el);
      }
    });
  
    nonRepeatedList = new Set(nonRepeatedList);
    nonRepeatedList = [...nonRepeatedList];
  
    repeatedOneList.forEach((el, ind, all) => {
      const current = el;
      const prev = all[ind - 1];
  
      if (prev !== undefined) {
        if (oneTime3) {
          repeatedOneListTrue.push(prev);
          oneTime3 = false;
        }
  
        if (current.id !== prev.id) {
          repeatedOneListTrue.push(current);
        }
      }
    });
  
    let realList = [...nonRepeatedList, ...repeatedOneListTrue, ...readyAct];
  
    realList = realList.filter((el, ind) => el !== undefined);
  
    return realList;
  }


}


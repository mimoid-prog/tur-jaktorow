import infoAll from "@/data/info";
import scheduleAll from "@/data/schedule";

const getMatches = (selected) => {
  const info = infoAll[selected];
  const schedule = scheduleAll[selected];
  const currentWeek = info[0].scoredGoals.length;

  let weekOne,
    weekTwo,
    titleOne,
    titleTwo,
    scoreOne,
    scoreTwo,
    isTextOne,
    isTextTwo;

  if (currentWeek === 0) {
    weekOne = currentWeek;
    weekTwo = currentWeek + 1;
  } else if (currentWeek === schedule.length) {
    weekOne = currentWeek - 2;
    weekTwo = currentWeek - 1;
  } else {
    weekOne = currentWeek - 1;
    weekTwo = currentWeek;
  }

  const turMatchOne = schedule[weekOne].matches.filter(
    (match) => match.teamOne === 0 || match.teamTwo === 0
  )[0];

  const turMatchTwo = schedule[weekTwo].matches.filter(
    (match) => match.teamOne === 0 || match.teamTwo === 0
  )[0];

  const weekDateOne = schedule[weekOne].date;
  const weekDateTwo = schedule[weekTwo].date;

  const dateOne = turMatchOne.date;
  const dateTwo = turMatchTwo.date;

  const timeOne = turMatchOne.time;
  const timeTwo = turMatchTwo.time;

  let homeOne, homeTwo;

  if (turMatchOne.home === true) homeOne = "(u nas)";
  else if (turMatchOne.home === false) homeOne = "(wyjazd)";
  else homeOne = "";

  if (turMatchTwo.home === true) homeTwo = "(u nas)";
  else if (turMatchTwo.home === false) homeTwo = "(wyjazd)";
  else homeTwo = "";

  const logosOne = {
    teamOne: info[turMatchOne.teamOne].logo,
    teamTwo: info[turMatchOne.teamTwo].logo,
  };

  const logosTwo = {
    teamOne: info[turMatchTwo.teamOne].logo,
    teamTwo: info[turMatchTwo.teamTwo].logo,
  };

  const clubsOne = [
    info[turMatchOne.teamOne].club,
    info[turMatchOne.teamTwo].club,
  ];
  const clubsTwo = [
    info[turMatchTwo.teamOne].club,
    info[turMatchTwo.teamTwo].club,
  ];

  if (currentWeek === 0) {
    titleOne = `Pierwszy mecz`;
    titleTwo = `Drugi mecz`;
    scoreOne = "wkrótce";
    scoreTwo = "wkrótce";
    isTextOne = true;
    isTextTwo = true;
  } else if (currentWeek < schedule.length - 1) {
    titleOne = `Poprzedni mecz`;
    titleTwo = `Następny mecz`;
    scoreOne = `${info[turMatchOne.teamOne].scoredGoals[weekOne]} :
    ${info[turMatchOne.teamTwo].scoredGoals[weekOne]}`;
    scoreTwo = "wkrótce";
    isTextOne = false;
    isTextTwo = true;
  } else {
    titleOne = `Przedostatni mecz sezonu`;
    titleTwo = `Ostatni mecz sezonu`;
    scoreOne = `${info[turMatchOne.teamOne].scoredGoals[weekOne]} :
    ${info[turMatchOne.teamTwo].scoredGoals[weekOne]}`;
    scoreTwo = `${info[turMatchTwo.teamOne].scoredGoals[weekTwo]} :
    ${info[turMatchTwo.teamTwo].scoredGoals[weekTwo]}`;
    isTextOne = false;
    isTextTwo = false;
  }

  return {
    matchOne: {
      title: titleOne,
      logos: logosOne,
      score: scoreOne,
      clubs: clubsOne,
      isText: isTextOne,
      weekDate: weekDateOne,
      date: dateOne,
      time: timeOne,
      home: homeOne,
    },
    matchTwo: {
      title: titleTwo,
      logos: logosTwo,
      score: scoreTwo,
      clubs: clubsTwo,
      isText: isTextTwo,
      weekDate: weekDateTwo,
      date: dateTwo,
      time: timeTwo,
      home: homeTwo,
    },
  };
};

export default getMatches;

import currentWeekAll from "@/data/currentWeek";
import infoAll from "@/data/info";
import scheduleAll from "@/data/schedule";

const getMatches = (selected) => {
  const info = infoAll[selected];
  const schedule = scheduleAll[selected];
  const currentWeek = currentWeekAll[selected];

  let weekOne,
    weekTwo,
    titleOne,
    titleTwo,
    scoreOne,
    scoreTwo,
    isTextOne,
    isTextTwo;

  if (currentWeek === 0 || currentWeek < schedule.length - 1) {
    weekOne = currentWeek;
    weekTwo = currentWeek + 1;
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

  const dateOne = turMatchOne.date;
  const dateTwo = turMatchTwo.date;

  const timeOne = turMatchOne.time;
  const timeTwo = turMatchTwo.time;

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
    titleOne = `Pierwszy mecz - ${dateOne} ${timeOne}`;
    titleTwo = `Drugi mecz - ${dateTwo} ${timeTwo}`;
    scoreOne = "wkrótce";
    scoreTwo = "wkrótce";
    isTextOne = true;
    isTextTwo = true;
  } else if (currentWeek < schedule.length - 1) {
    titleOne = `Ostatni mecz - ${dateOne} ${timeOne}`;
    titleTwo = `Następny mecz - ${dateTwo} ${timeTwo}`;
    scoreOne = `${info[turMatchOne.teamOne].scoredGoals[weekOne]} :
    ${info[turMatchOne.teamTwo].scoredGoals[weekOne]}`;
    scoreTwo = `${info[turMatchTwo.teamOne].scoredGoals[weekTwo]} :
    ${info[turMatchTwo.teamTwo].scoredGoals[weekTwo]}`;
    isTextOne = false;
    isTextTwo = false;
  } else {
    titleOne = `Przedostatni mecz sezonu - ${dateOne} ${timeOne}`;
    titleTwo = `Ostatni mecz sezonu - ${dateTwo} ${timeTwo}`;
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
    },
    matchTwo: {
      title: titleTwo,
      logos: logosTwo,
      score: scoreTwo,
      clubs: clubsTwo,
      isText: isTextTwo,
    },
  };
};

export default getMatches;

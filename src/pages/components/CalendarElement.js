import React, { useState, Component } from "react";
import {
  DayPilot,
  DayPilotCalendar,
  DayPilotNavigator,
} from "@daypilot/daypilot-lite-react";
import "../../App.css";
import { fire, auth, db } from "../../services/firebase";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();
today = yyyy + "-" + mm + "-" + dd;

const styles = {
  wrap: {
    display: "flex",
  },
  left: {
    marginRight: "10px",
  },
  main: {
    flexGrow: "1",
  },
};

const createEvent = (group, start, end, id, text, backColor) => {
  const dbRef = collection(db, group);
  const event = {
    start,
    end,
    id,
    text,
    backColor,
  };
  return addDoc(dbRef, event);
};

const deleteEvent = (group, id) => {
  const eventDoc = doc(db, group, id);
  return deleteDoc(eventDoc);
};

class CalendarElement extends Component {
  constructor(props) {
    super(props);
    this.calendarRef = React.createRef();
    this.state = {
      viewType: "Week",
      durationBarVisible: false,
      timeRangeSelectedHandling: "Enabled",
      onTimeRangeSelected: async (args) => {
        const dp = this.calendar;
        const modal = await DayPilot.Modal.prompt(
          "Create a new event:",
          "Event 1"
        );
        dp.clearSelection();
        if (!modal.result) {
          return;
        }
        var start = String(args.start);
        var end = String(args.end);
        var id = String(DayPilot.guid());
        var text = String(modal.result);
        var backColor = this.props.backColor;
        var group = this.props.group;
        createEvent(group, start, end, id, text, backColor);
        dp.events.add({
          start: args.start,
          end: args.end,
          id: DayPilot.guid(),
          text: modal.result,
          backColor: backColor,
        });
      },
      eventDeleteHandling: "Update",
      onEventDeleted: async (args) => {
        deleteEvent(this.props.group, args.e.data.id);
      },
    };
  }

  get calendar() {
    return this.calendarRef.current.control;
  }

  componentDidMount() {
    const events = this.props.events;

    this.calendar.update({
      startDate: today,
      events: events,
    });
  }

  render() {
    return (
      <div style={styles.wrap}>
        <div style={styles.left}>
          <DayPilotNavigator
            selectMode={"week"}
            showMonths={1}
            skipMonths={1}
            startDate={today}
            selectionDay={today}
            onTimeRangeSelected={(args) => {
              this.calendar.update({
                startDate: args.day,
              });
            }}
          />
        </div>
        <div style={styles.main}>
          <DayPilotCalendar {...this.state} ref={this.calendarRef} />
        </div>
      </div>
    );
  }
}

export default CalendarElement;

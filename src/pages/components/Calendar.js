import React, { Component, useState, useEffect } from "react";
import CalendarElement from "./CalendarElement";
import {onAuthStateChanged} from 'firebase/auth';
import { auth, db } from "../../services/firebase";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const Calendar = () => {

  const [user, setUser] = useState({});
  const [events, setEvents] = useState([]);
  const [color, setColor] = useState("");
  const [group, setGroup] = useState("");

  const authListener = () => {
    onAuthStateChanged(auth, (user) => {
        setUser(user);
    });
  };

  const getAllGroupInfo = async () => {
    const dbRef = collection(db, user.uid);
    return await getDocs(dbRef);
  };

  const getGroupInfo = async () => {
    const data = await getAllGroupInfo();
    const groupInfo = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    console.log(groupInfo)
    if (groupInfo.length != 0) {
      setGroup(groupInfo[0].group);
      setColor(groupInfo[0].backColor);
    } else {
      setColor("#2e78d6");
      setGroup("group0");
    }
  };

  const createEvent = (start, end, id, text) => {
    const dbRef = collection(db, group);
    const event = {
      start,
      end,
      id,
      text,
    };
    return addDoc(dbRef, event);
  };

  const getAllEvents = async () => {
    await getGroupInfo();
    console.log(group)
    const dbRef = collection(db, group);
    return await getDocs(dbRef);
  };

  const getEvents = async () => {
    const data = await getAllEvents();
    const eventData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    console.log(eventData);
    if (eventData.length == 0) {
      createEvent("2000-01-01T00:00:00", "2000-01-01T00:30:00", 1, "buffer");
    }
    setEvents(eventData);
  };

  useEffect(() => {
    authListener();
    getGroupInfo();
    getEvents();
  }, [user, group, color]);

  if (events.length > 0 || group == null || user  == null) {
    return (
      <div>
        <CalendarElement events={events} group={group} backColor={color} />
      </div>
    );
  } else {
    return (
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
    );
  }
};

export default Calendar;

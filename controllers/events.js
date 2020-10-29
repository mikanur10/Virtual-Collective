const Event = require('../models/event')
const db = require('../db/connection')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const getEvents = async (req, res) => {
    try {
        const events = await Event.find()
        res.json(events)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getEvent = async (req, res) => {
    try {
        const { id } = req.params
        const event = await Event.findById(id)
        if (event) {
            return res.json(event)
        }
        res.status(404).json({ message: 'Event not found!' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const createEvent = async (req, res) => {
    try {
        const event = await new Event(req.body)
        await event.save()
        res.status(201).json(event)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}

const updateEvent = async (req, res) => {
    const { id } = req.params
    await Event.findByIdAndUpdate(id, req.body, { new: true }, (error, event) => {
        if (error) {
            return res.status(500).json({ error: error.message })
        }
        if (!event) {
            return res.status(404).json({ message: 'Event not found!' })
        }
        res.status(200).json(event)
    })
}

const deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Event.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Event deleted")
        }
        throw new Error("Event not found")
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createEvent,
    getEvents,
    getEvent,
    updateEvent,
    deleteEvent
}
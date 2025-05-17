import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PlusIcon, PencilIcon, TrashIcon } from '@heroicons/react/outline';

export default function Events() {
  const [events, setEvents] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    description: '',
    image: '',
    tags: []
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('/api/events');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingEvent) {
        await axios.put(`/api/events/${editingEvent.id}`, formData);
      } else {
        await axios.post('/api/events', formData);
      }
      fetchEvents();
      setIsFormOpen(false);
      setEditingEvent(null);
      setFormData({ title: '', date: '', time: '', description: '', image: '', tags: [] });
    } catch (error) {
      console.error('Error saving event:', error);
    }
  };

  const handleEdit = (event) => {
    setEditingEvent(event);
    setFormData(event);
    setIsFormOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        await axios.delete(`/api/events/${id}`);
        fetchEvents();
      } catch (error) {
        console.error('Error deleting event:', error);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Events</h2>
        <button
          onClick={() => setIsFormOpen(true)}
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          <PlusIcon className="w-5 h-5 mr-2" />
          Add Event
        </button>
      </div>

      {/* Event Form */}
      {isFormOpen && (
        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-xl space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Event Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="bg-gray-700 text-white px-4 py-2 rounded-lg"
            />
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="bg-gray-700 text-white px-4 py-2 rounded-lg"
            />
            <input
              type="time"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className="bg-gray-700 text-white px-4 py-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="Image URL"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="bg-gray-700 text-white px-4 py-2 rounded-lg"
            />
          </div>
          <textarea
            placeholder="Event Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg"
            rows="4"
          />
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => {
                setIsFormOpen(false);
                setEditingEvent(null);
                setFormData({ title: '', date: '', time: '', description: '', image: '', tags: [] });
              }}
              className="px-4 py-2 text-gray-400 hover:text-white transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              {editingEvent ? 'Update Event' : 'Add Event'}
            </button>
          </div>
        </form>
      )}

      {/* Events List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-gray-800 rounded-xl overflow-hidden">
            {event.image && (
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{event.description}</p>
              <div className="flex items-center justify-between">
                <div className="text-blue-400 text-sm">
                  {new Date(event.date).toLocaleDateString()}
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(event)}
                    className="p-2 text-gray-400 hover:text-blue-400 transition"
                  >
                    <PencilIcon className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(event.id)}
                    className="p-2 text-gray-400 hover:text-red-400 transition"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
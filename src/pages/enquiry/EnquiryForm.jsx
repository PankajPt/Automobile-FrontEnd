import { useState } from 'react';
import { FiCheckCircle, FiAlertCircle, FiChevronDown } from 'react-icons/fi';
import { motion } from 'framer-motion';
import fetchData from '../../services/api.services.js';

const EnquiryForm = ({ models, selectedModel, setSelectedModel }) => {
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    message: '',
    agree: false,
    model: ''
  });
  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleModelSelect = (e) => {
    const selected = models.find(m => m.name === e.target.value);
    setSelectedModel(selected);
    setFormData({...formData, model: selected.name})
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
    
    try {
      const options = {
        method: 'POST',
        data: formData,
        file: null,
        isBinary: false
    };
      const response = await fetchData('/users/submit-form', options)
      if (response.success) {
        setSubmissionStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          address: '',
          message: '',
          agree: false
        });
        setSelectedModel(null);
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      setSubmissionStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Car Selection */}
      <div className="relative">
        <label className="block text-gray-300 mb-3 text-lg">Select Your Toyota Car *</label>
        <div className="relative">
          <select
            className="w-full bg-gray-800 rounded-xl border-2 border-gray-700 px-6 py-4 text-gray-300 
                    focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 appearance-none"
            value={selectedModel?.name || ''}
            onChange={handleModelSelect}
            required
          >
            <option value="">-- Select Model --</option>
            {models.map((model) => (
              <option key={model.name} value={model.name}>{model.name}</option>
            ))}
          </select>
          <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
        </div>
      </div>

      {/* Other Form Fields */}
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Your Name *"
          className="w-full bg-gray-800 rounded-xl border-2 border-gray-700 px-6 py-4 text-gray-300"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
        />
        <input
          type="tel"
          placeholder="Mobile Number *"
          className="w-full bg-gray-800 rounded-lg border border-gray-700 p-3 text-gray-300"
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          required
        />
        <input
          type="email"
          placeholder="Email Address *"
          className="w-full bg-gray-800 rounded-lg border border-gray-700 p-3 text-gray-300"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required
        />
        <input
          type="text"
          placeholder="Address (Optional)"
                className="w-full bg-gray-800 rounded-lg border border-gray-700 p-3 text-gray-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
              />
        <textarea
          placeholder="Message (Optional)"
          className="w-full bg-gray-800 rounded-lg border border-gray-700 p-3 text-gray-300"
          rows="4"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 px-8 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-gray-900 font-bold rounded-xl"
      >
        Submit Enquiry
      </button>
    </form>
  );
};

export default EnquiryForm;
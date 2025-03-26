import { useState } from 'react';
import { FiCheckCircle, FiAlertCircle, FiChevronDown } from 'react-icons/fi';
import { toast } from 'react-toastify';
import fetchData from '../../services/api.services.js';

const EnquiryForm = ({ models, selectedModel, setSelectedModel }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    message: '',
    agree: false,
    model: null
  });
  
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
      const response = await fetchData('users/submit-form', options)
      if (response.success) {
        setSubmissionStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          address: '',
          message: '',
          agree: false,
          model: null
        });
        setSelectedModel(null);
        toast.success('Thank you for your enquiry. We have received your request and will get back to you soon !!!', { icon: <FiCheckCircle className="text-2xl mr-2" /> })
      } else {
        setSubmissionStatus('error');
        toast.error(`Something went wrong while sending enquiry form. Please try again.`,{
          icon: <FiAlertCircle className="text-2xl mr-2" />
        })
      }
    } catch (error) {
      setSubmissionStatus('error');
      toast.error(`Something went wrong while sending enquiry form. Please try again.`, {
        icon: <FiAlertCircle className="text-2xl mr-2" />
      })
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
            disabled={submissionStatus === 'submitting'}
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
          disabled={submissionStatus === 'submitting'}
        />
        <input
          type="tel"
          placeholder="Mobile Number *"
          className="w-full bg-gray-800 rounded-lg border border-gray-700 p-3 text-gray-300"
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          required
          disabled={submissionStatus === 'submitting'}
        />
        <input
          type="email"
          placeholder="Email Address *"
          className="w-full bg-gray-800 rounded-lg border border-gray-700 p-3 text-gray-300"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required
          disabled={submissionStatus === 'submitting'}
        />
        <input
          type="text"
          placeholder="Address (Optional)"
          className="w-full bg-gray-800 rounded-lg border border-gray-700 p-3 text-gray-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50"
          value={formData.address}
          onChange={(e) => setFormData({...formData, address: e.target.value})}
          disabled={submissionStatus === 'submitting'}
        />
        <textarea
          placeholder="Message (Optional)"
          className="w-full bg-gray-800 rounded-lg border border-gray-700 p-3 text-gray-300"
          rows="4"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          disabled={submissionStatus === 'submitting'}
        />
      </div>

      <button
        type="submit"
        disabled={submissionStatus === 'submitting'}
        className={`w-full py-4 px-8 bg-gradient-to-r from-cyan-500 to-purple-500 text-gray-900 font-bold rounded-xl transition-opacity ${
          submissionStatus === 'submitting' 
            ? 'opacity-70 cursor-not-allowed' 
            : 'hover:from-cyan-400 hover:to-purple-400'
        }`}
      >
        {submissionStatus === 'submitting' ? (
          <div className="flex items-center justify-center gap-2">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900"></div>
            Submitting...
          </div>
        ) : (
          'Submit Enquiry'
        )}
      </button>
    </form>
  );
};

export default EnquiryForm;
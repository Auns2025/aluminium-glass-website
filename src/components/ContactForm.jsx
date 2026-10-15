import { useState } from 'react';
import { 
  Send, 
  MessageSquare, 
  Phone, 
  CheckCircle2, 
  AlertCircle, 
  UploadCloud, 
  FileText, 
  X
} from 'lucide-react';
import { services } from '../data/services';

const projectTypes = [
  'Luxury Residential Villa',
  'Commercial / Office Tower',
  'Hospitality / Luxury Hotel',
  'Retail Showroom / Storefront',
  'Villa Facade Renovation / Retrofit',
  'Interior Architectural Glasswork',
  'Other Custom Project',
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    whatsapp: '',
    projectLocation: '',
    projectType: 'Luxury Residential Villa',
    servicesRequired: ['Aluminium Windows & Doors'],
    projectDetails: '',
  });

  const [uploadedFile, setUploadedFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submissionMethod, setSubmissionMethod] = useState('');

  // Handle service multi-select toggle
  const toggleService = (serviceTitle) => {
    setFormData((prev) => {
      const exists = prev.servicesRequired.includes(serviceTitle);
      const updated = exists
        ? prev.servicesRequired.filter((s) => s !== serviceTitle)
        : [...prev.servicesRequired, serviceTitle];
      return { ...prev, servicesRequired: updated };
    });
    if (errors.servicesRequired) {
      setErrors((prev) => ({ ...prev, servicesRequired: null }));
    }
  };

  // Handle file upload & validation
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate size (max 25MB)
    const maxSize = 25 * 1024 * 1024;
    if (file.size > maxSize) {
      setErrors((prev) => ({
        ...prev,
        file: 'File size exceeds 25MB limit. Please upload a smaller file or send via WhatsApp.',
      }));
      return;
    }

    // Validate allowed file types: PDF, DWG, DXF, PNG, JPG, JPEG
    const allowedExtensions = ['pdf', 'dwg', 'dxf', 'png', 'jpg', 'jpeg'];
    const extension = file.name.split('.').pop().toLowerCase();
    if (!allowedExtensions.includes(extension)) {
      setErrors((prev) => ({
        ...prev,
        file: 'Unsupported file type. Allowed formats: PDF, DWG, DXF, PNG, JPG.',
      }));
      return;
    }

    setUploadedFile(file);
    setErrors((prev) => ({ ...prev, file: null }));
  };

  const removeFile = () => {
    setUploadedFile(null);
  };

  // Form validation
  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full Name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format (e.g. name@domain.com).';
    }
    if (!formData.whatsapp.trim()) {
      errs.whatsapp = 'WhatsApp / phone number is required.';
    }
    if (!formData.projectLocation.trim()) {
      errs.projectLocation = 'Project location in Dubai/UAE is required.';
    }
    if (!formData.projectType) {
      errs.projectType = 'Project type is required.';
    }
    if (formData.servicesRequired.length === 0) {
      errs.servicesRequired = 'Please select at least one required service.';
    }
    if (!formData.projectDetails.trim()) {
      errs.projectDetails = 'Please provide brief project specifications or details.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Generate WhatsApp message and execute submission
  const handleSubmit = (method = 'whatsapp') => {
    if (!validate()) return;

    const messageText = `*NEW ARCHITECTURAL QUOTATION INQUIRY*
*Client:* ${formData.name}
${formData.company ? `*Company:* ${formData.company}\n` : ''}*Email:* ${formData.email}
*WhatsApp:* ${formData.whatsapp}
*Project Location:* ${formData.projectLocation}
*Project Type:* ${formData.projectType}
*Services Required:* ${formData.servicesRequired.join(', ')}
*Project Details:*
${formData.projectDetails}
${uploadedFile ? `*Attached Drawing/File:* ${uploadedFile.name} (${(uploadedFile.size / 1024 / 1024).toFixed(2)} MB)\n` : ''}
_Submitted via amglassaluminium.com_`;

    setSubmissionMethod(method);
    setSubmitted(true);

    if (method === 'whatsapp') {
      const waUrl = `https://wa.me/971549982498?text=${encodeURIComponent(messageText)}`;
      window.open(waUrl, '_blank');
    } else if (method === 'email') {
      const subject = encodeURIComponent(`Quotation Request: ${formData.projectType} - ${formData.projectLocation}`);
      const mailtoUrl = `mailto:info@amglassaluminum.com?subject=${subject}&body=${encodeURIComponent(messageText)}`;
      window.location.href = mailtoUrl;
    }
  };

  return (
    <div className="bg-white rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#ece5dc] shadow-[0_12px_36px_rgba(16,18,20,0.05)]">
      
      {/* Header */}
      <div className="mb-8">
        <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#b8893e] block mb-1">
          Formal Request For Quotation
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#101214] tracking-tight">
          Request Technical Proposal &amp; Pricing
        </h2>
        <p className="text-sm text-[#6f6b63] mt-2 leading-relaxed">
          Provide your project requirements below. Our technical estimator will review your specifications and contact you promptly.
        </p>
      </div>

      {submitted ? (
        <div className="py-12 px-6 rounded-2xl bg-[#f7f5f0] border border-[#b8893e]/40 text-center animate-fade-in-up">
          <div className="w-16 h-16 rounded-full bg-[#b8893e]/20 text-[#b8893e] flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
          </div>

          <h3 className="text-2xl font-bold text-[#101214]">
            Inquiry Prepared &amp; Dispatched
          </h3>

          <p className="text-sm text-[#252525] mt-2 max-w-lg mx-auto leading-relaxed">
            Thank you, <span className="font-semibold">{formData.name}</span>. Your quotation details for{' '}
            <span className="font-semibold">{formData.projectLocation}</span> have been formatted and prepared for dispatch via {submissionMethod === 'email' ? 'Direct Email' : 'WhatsApp'}.
          </p>

          <div className="mt-6 p-4 rounded-xl bg-white border border-[#ece5dc] max-w-md mx-auto text-left text-xs text-[#252525] space-y-1.5">
            <p><span className="font-bold text-[#101214]">Selected Services:</span> {formData.servicesRequired.join(', ')}</p>
            <p><span className="font-bold text-[#101214]">Contact Number:</span> {formData.whatsapp}</p>
            <p><span className="font-bold text-[#101214]">Email:</span> {formData.email}</p>
            {uploadedFile && (
              <p><span className="font-bold text-[#101214]">Drawings:</span> {uploadedFile.name}</p>
            )}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/971549982498"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Open in WhatsApp</span>
            </a>

            <a
              href="tel:+971549982498"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#101214] hover:bg-[#b8893e] hover:text-[#101214] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Call Technical Director</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: '',
                  company: '',
                  email: '',
                  whatsapp: '',
                  projectLocation: '',
                  projectType: 'Luxury Residential Villa',
                  servicesRequired: ['Aluminium Windows & Doors'],
                  projectDetails: '',
                });
                setUploadedFile(null);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#d9d1c2] bg-white text-[#101214] text-xs font-bold uppercase tracking-wider hover:border-[#b8893e] transition-colors"
            >
              <span>Submit Another Project</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit('whatsapp'); }} className="space-y-6">
          
          {/* Row 1: Name & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#101214] mb-2">
                Full Name <span className="text-[#b8893e]">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Mohammed Al Hashmi"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.name ? 'border-red-500 bg-red-50/20' : 'border-[#d9d1c2] bg-[#f7f5f0]/50'
                } focus:outline-none focus:ring-2 focus:ring-[#b8893e] focus:border-transparent text-sm text-[#101214] transition-all`}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#101214] mb-2">
                Company Name <span className="text-neutral-400 font-normal lowercase">(optional)</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Architectural Consultancy LLC"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#d9d1c2] bg-[#f7f5f0]/50 focus:outline-none focus:ring-2 focus:ring-[#b8893e] focus:border-transparent text-sm text-[#101214] transition-all"
              />
            </div>
          </div>

          {/* Row 2: Email & WhatsApp Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#101214] mb-2">
                Email Address <span className="text-[#b8893e]">*</span>
              </label>
              <input
                type="email"
                placeholder="e.g. client@domain.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#d9d1c2] bg-[#f7f5f0]/50'
                } focus:outline-none focus:ring-2 focus:ring-[#b8893e] focus:border-transparent text-sm text-[#101214] transition-all`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#101214] mb-2">
                WhatsApp / Phone Number <span className="text-[#b8893e]">*</span>
              </label>
              <input
                type="tel"
                placeholder="e.g. +971 50 123 4567"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.whatsapp ? 'border-red-500 bg-red-50/20' : 'border-[#d9d1c2] bg-[#f7f5f0]/50'
                } focus:outline-none focus:ring-2 focus:ring-[#b8893e] focus:border-transparent text-sm text-[#101214] transition-all`}
              />
              {errors.whatsapp && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.whatsapp}</span>
                </p>
              )}
            </div>
          </div>

          {/* Row 3: Project Location & Project Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#101214] mb-2">
                Project Location <span className="text-[#b8893e]">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Palm Jumeirah, Dubai / Downtown / DIP"
                value={formData.projectLocation}
                onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.projectLocation ? 'border-red-500 bg-red-50/20' : 'border-[#d9d1c2] bg-[#f7f5f0]/50'
                } focus:outline-none focus:ring-2 focus:ring-[#b8893e] focus:border-transparent text-sm text-[#101214] transition-all`}
              />
              {errors.projectLocation && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.projectLocation}</span>
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#101214] mb-2">
                Project Type <span className="text-[#b8893e]">*</span>
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#d9d1c2] bg-[#f7f5f0]/50 focus:outline-none focus:ring-2 focus:ring-[#b8893e] focus:border-transparent text-sm text-[#101214] transition-all"
              >
                {projectTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 4: Services Required Multi-Select (Required) */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#101214]">
                Services Required <span className="text-[#b8893e]">*</span> <span className="text-neutral-400 font-normal lowercase">(select all that apply)</span>
              </label>
              <span className="text-xs text-[#b8893e] font-medium">
                {formData.servicesRequired.length} selected
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-1">
              {services.map((srv) => {
                const isSelected = formData.servicesRequired.includes(srv.title);
                return (
                  <button
                    type="button"
                    key={srv.id}
                    onClick={() => toggleService(srv.title)}
                    className={`text-left p-3 rounded-xl border text-xs font-semibold transition-all duration-200 flex items-center justify-between ${
                      isSelected
                        ? 'border-[#b8893e] bg-[#b8893e]/10 text-[#101214] shadow-sm'
                        : 'border-[#ece5dc] bg-[#f7f5f0]/40 text-[#6f6b63] hover:border-[#b8893e]/50'
                    }`}
                  >
                    <span className="truncate pr-2">{srv.title}</span>
                    <span
                      className={`w-4 h-4 rounded flex items-center justify-center shrink-0 text-[10px] ${
                        isSelected
                          ? 'bg-[#b8893e] text-[#101214]'
                          : 'border border-[#d9d1c2] bg-white'
                      }`}
                    >
                      {isSelected && '✓'}
                    </span>
                  </button>
                );
              })}
            </div>
            {errors.servicesRequired && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.servicesRequired}</span>
              </p>
            )}
          </div>

          {/* Row 5: Project Details (Required) */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#101214] mb-2">
              Project Details &amp; Specifications <span className="text-[#b8893e]">*</span>
            </label>
            <textarea
              rows="4"
              placeholder="Please provide dimensions, estimated quantities, glass type (double glazed, tempered, acoustic), finish preference, or timeline..."
              value={formData.projectDetails}
              onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.projectDetails ? 'border-red-500 bg-red-50/20' : 'border-[#d9d1c2] bg-[#f7f5f0]/50'
              } focus:outline-none focus:ring-2 focus:ring-[#b8893e] focus:border-transparent text-sm text-[#101214] transition-all`}
            />
            {errors.projectDetails && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.projectDetails}</span>
              </p>
            )}
          </div>

          {/* Row 6: Upload Drawings or Images (Optional) */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#101214] mb-2">
              Upload Drawings or Architectural Plans <span className="text-neutral-400 font-normal lowercase">(optional, max 25MB: PDF, DWG, DXF, PNG, JPG)</span>
            </label>

            {uploadedFile ? (
              <div className="flex items-center justify-between p-3.5 rounded-xl border border-[#b8893e]/50 bg-[#b8893e]/10">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-[#b8893e]" />
                  <div>
                    <p className="text-xs font-bold text-[#101214] truncate max-w-xs">{uploadedFile.name}</p>
                    <p className="text-[10px] text-[#6f6b63]">{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={removeFile}
                  className="p-1 text-neutral-500 hover:text-red-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center p-6 rounded-xl border-2 border-dashed border-[#d9d1c2] bg-[#f7f5f0]/40 hover:bg-[#f7f5f0] hover:border-[#b8893e] transition-all cursor-pointer">
                <UploadCloud className="w-8 h-8 text-[#b8893e] mb-2" />
                <span className="text-xs font-semibold text-[#101214]">
                  Click to attach CAD files, architectural PDFs, or site photos
                </span>
                <span className="text-[10px] text-[#6f6b63] mt-1">
                  Supported formats: .pdf, .dwg, .dxf, .png, .jpg (Up to 25MB)
                </span>
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.dwg,.dxf,.png,.jpg,.jpeg"
                  className="hidden"
                />
              </label>
            )}
            {errors.file && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.file}</span>
              </p>
            )}
          </div>

          {/* Submission Action Buttons */}
          <div className="pt-4 border-t border-[#ece5dc] flex flex-col sm:flex-row items-center gap-4">
            {/* Primary Submit via WhatsApp */}
            <button
              type="button"
              onClick={() => handleSubmit('whatsapp')}
              className="w-full sm:flex-1 py-4 px-6 rounded-full bg-gradient-to-r from-[#a87830] via-[#d9b66e] to-[#b8893e] text-[#101214] font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Submit &amp; Open in WhatsApp</span>
              <MessageSquare className="w-4 h-4" />
            </button>

            {/* Email Submission Fallback */}
            <button
              type="button"
              onClick={() => handleSubmit('email')}
              className="w-full sm:w-auto py-4 px-7 rounded-full border border-[#d9d1c2] bg-white text-[#101214] font-bold text-xs uppercase tracking-wider hover:border-[#b8893e] hover:bg-[#101214] hover:text-[#f7f5f0] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Send via Email</span>
              <Send className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-center text-[#6f6b63]">
            Instant technical dispatch to AM Glass Aluminium engineering desk · Dubai, UAE
          </p>

        </form>
      )}

    </div>
  );
};

export default ContactForm;

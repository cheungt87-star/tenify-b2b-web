/* @ds-bundle: {"format":4,"namespace":"TenifyDesignSystem_762ad4","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Skeleton","sourcePath":"components/core/Skeleton.jsx"},{"name":"ListSkeleton","sourcePath":"components/core/Skeleton.jsx"},{"name":"StatusBadge","sourcePath":"components/core/StatusBadge.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"ConfirmDialog","sourcePath":"components/feedback/ConfirmDialog.jsx"},{"name":"OfflineBanner","sourcePath":"components/feedback/OfflineBanner.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"AddEntityBottomSheet","sourcePath":"components/forms/AddEntityBottomSheet.jsx"},{"name":"FieldStatusIcon","sourcePath":"components/forms/FieldStatusIcon.jsx"},{"name":"PhotoCaptureControl","sourcePath":"components/forms/PhotoCaptureControl.jsx"},{"name":"RatingScaleControl","sourcePath":"components/forms/RatingScaleControl.jsx"},{"name":"TriStateControl","sourcePath":"components/forms/TriStateControl.jsx"},{"name":"FixtureRow","sourcePath":"components/inspection/FixtureRow.jsx"},{"name":"FurnishingItemRow","sourcePath":"components/inspection/FurnishingItemRow.jsx"},{"name":"BottomNav","sourcePath":"components/navigation/BottomNav.jsx"},{"name":"Header","sourcePath":"components/navigation/Header.jsx"}],"sourceHashes":{"components/core/Button.jsx":"d572a6615c85","components/core/Input.jsx":"429dff00dfb5","components/core/Skeleton.jsx":"499bec2c6eba","components/core/StatusBadge.jsx":"e4a78a283a98","components/core/Switch.jsx":"33b207a51109","components/feedback/ConfirmDialog.jsx":"71f3ae741ea6","components/feedback/OfflineBanner.jsx":"8b89dc366f4e","components/feedback/Toast.jsx":"2a9cda7e6641","components/forms/AddEntityBottomSheet.jsx":"05b4521c187d","components/forms/FieldStatusIcon.jsx":"7db3bab4e7b6","components/forms/PhotoCaptureControl.jsx":"09ab7e87a427","components/forms/RatingScaleControl.jsx":"55584259a90e","components/forms/TriStateControl.jsx":"a453e2975a40","components/inspection/FixtureRow.jsx":"e2c55b326eaa","components/inspection/FurnishingItemRow.jsx":"63e1658f16ed","components/navigation/BottomNav.jsx":"6335d5f46400","components/navigation/Header.jsx":"a729795cd6d0","ui_kits/app/App.jsx":"4746c7b06a4f","ui_kits/app/App.standalone.jsx":"828caf42b74b","ui_kits/app/Screens.jsx":"d8ba1df5b410"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TenifyDesignSystem_762ad4 = window.TenifyDesignSystem_762ad4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
const buttonBase = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  fontFamily: 'var(--font-sans)',
  fontWeight: 600,
  fontSize: 15,
  border: 'none',
  cursor: 'pointer',
  transition: 'transform .12s ease, opacity .12s ease'
};
const variants = {
  primary: {
    background: 'var(--charcoal)',
    color: 'var(--gold-600)',
    borderRadius: 8,
    padding: '14px 20px'
  },
  secondary: {
    background: 'var(--true-white)',
    color: 'var(--neutral-900)',
    border: '1px solid var(--border-default)',
    borderRadius: 12,
    padding: '13px 20px'
  },
  text: {
    background: 'transparent',
    color: 'var(--link)',
    padding: '8px 4px'
  },
  destructive: {
    background: 'var(--error)',
    color: '#fff',
    borderRadius: 12,
    padding: '14px 20px'
  }
};
const sizes = {
  md: {},
  sm: {
    fontSize: 13,
    padding: '9px 14px'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled,
  children,
  onClick
}) {
  const style = {
    ...buttonBase,
    ...variants[variant],
    ...(size === 'sm' ? sizes.sm : {}),
    opacity: disabled ? 0.5 : 1,
    width: '100%'
  };
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: onClick,
    style: style,
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.98)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  error
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      marginBottom: 6,
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--neutral-800)'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      borderRadius: 12,
      border: `1px solid ${error ? 'var(--error)' : 'var(--neutral-300)'}`,
      padding: '12px 16px',
      fontSize: 15,
      fontFamily: 'var(--font-sans)',
      outline: 'none',
      color: 'var(--neutral-900)'
    }
  }), error && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: 12,
      color: 'var(--error)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Skeleton.jsx
try { (() => {
function Skeleton({
  width = '100%',
  height = 14
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 8,
      background: 'var(--neutral-200)',
      opacity: 0.8,
      animation: 'ds-pulse 1.4s ease-in-out infinite'
    }
  });
}
function ListSkeleton({
  rows = 4
}) {
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("style", null, '@keyframes ds-pulse{0%,100%{opacity:.8}50%{opacity:.4}}'), Array.from({
    length: rows
  }).map((_, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      borderRadius: 12,
      border: '1px solid var(--border-default)',
      background: 'var(--true-white)',
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Skeleton, {
    width: "66%",
    height: 14
  }), /*#__PURE__*/React.createElement(Skeleton, {
    width: "33%",
    height: 11
  })), /*#__PURE__*/React.createElement(Skeleton, {
    width: 64,
    height: 22
  }))));
}
Object.assign(__ds_scope, { Skeleton, ListSkeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusBadge.jsx
try { (() => {
const badgeTones = {
  neutral: {
    background: 'rgba(43,123,229,0.12)',
    color: 'var(--info)'
  },
  success: {
    background: 'rgba(63,125,83,0.1)',
    color: 'var(--success)'
  },
  error: {
    background: 'rgba(200,64,64,0.1)',
    color: 'var(--error)'
  },
  warning: {
    background: 'rgba(185,133,42,0.1)',
    color: 'var(--warning)'
  }
};
function StatusBadge({
  tone = 'neutral',
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      borderRadius: 9999,
      padding: '4px 10px',
      fontSize: 11,
      fontFamily: 'var(--font-sans)',
      fontWeight: 400,
      ...badgeTones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
const {
  useState
} = React;
function Switch({
  checked: checkedProp,
  defaultChecked = false,
  disabled = false,
  onChange
}) {
  const [internal, setInternal] = useState(defaultChecked);
  const checked = checkedProp !== undefined ? checkedProp : internal;
  function toggle() {
    if (disabled) return;
    if (onChange) onChange(!checked);
    if (checkedProp === undefined) setInternal(!checked);
  }
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": checked,
    disabled: disabled,
    onClick: toggle,
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      width: 40,
      height: 24,
      borderRadius: 9999,
      border: 'none',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      background: checked ? 'var(--error)' : 'var(--neutral-200)',
      transition: 'background .15s ease'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 4,
      left: checked ? 20 : 4,
      width: 16,
      height: 16,
      borderRadius: 9999,
      background: '#fff',
      boxShadow: '0 1px 2px rgba(0,0,0,.15)',
      transition: 'left .15s ease'
    }
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ConfirmDialog.jsx
try { (() => {
function ConfirmDialog({
  open,
  title,
  description,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  destructive = false,
  onConfirm,
  onCancel
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,0.4)',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 420,
      borderRadius: '24px 24px 0 0',
      background: 'var(--true-white)',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '0 auto 16px',
      height: 4,
      width: 40,
      borderRadius: 9999,
      background: 'var(--neutral-200)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--neutral-900)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontSize: 14,
      color: 'var(--neutral-600)'
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column-reverse',
      gap: 8,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onCancel,
    style: {
      width: '100%',
      borderRadius: 12,
      border: '1px solid var(--border-default)',
      background: 'transparent',
      padding: '14px',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--neutral-800)'
    }
  }, cancelLabel), /*#__PURE__*/React.createElement("button", {
    onClick: onConfirm,
    style: {
      width: '100%',
      borderRadius: 12,
      border: 'none',
      padding: '14px',
      fontSize: 14,
      fontWeight: 600,
      color: destructive ? '#fff' : 'var(--gold-600)',
      background: destructive ? 'var(--error)' : 'var(--charcoal)'
    }
  }, confirmLabel))));
}
Object.assign(__ds_scope, { ConfirmDialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ConfirmDialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/OfflineBanner.jsx
try { (() => {
function OfflineBanner({
  show = true
}) {
  if (!show) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      borderBottom: '1px solid #FDE68A',
      background: '#FFFBEB',
      padding: '8px 12px',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      color: '#78350F'
    }
  }, /*#__PURE__*/React.createElement("span", null, "You're offline \u2014 changes save on this device and will sync later"));
}
Object.assign(__ds_scope, { OfflineBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/OfflineBanner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const toastTones = {
  info: 'var(--info)',
  success: 'var(--success)',
  warning: 'var(--warning)',
  error: 'var(--error)'
};
function Toast({
  message,
  variant = 'info'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      borderRadius: 16,
      border: `1px solid ${toastTones[variant]}4d`,
      background: 'var(--true-white)',
      padding: '12px 16px',
      boxShadow: 'var(--shadow-toast)',
      fontFamily: 'var(--font-sans)',
      maxWidth: 380
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 9999,
      background: toastTones[variant],
      marginTop: 6,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--neutral-900)'
    }
  }, message));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/AddEntityBottomSheet.jsx
try { (() => {
const {
  useState
} = React;
function AddEntityBottomSheet({
  open,
  title,
  suggestions = [],
  onClose,
  onSelectExisting,
  onCreateNew
}) {
  const [query, setQuery] = useState('');
  if (!open) return null;
  const trimmed = query.trim();
  const filtered = suggestions.filter(s => s.toLowerCase().includes(trimmed.toLowerCase()));
  const canCreate = trimmed && !suggestions.some(s => s.toLowerCase() === trimmed.toLowerCase());
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,0.4)',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 420,
      borderRadius: '24px 24px 0 0',
      background: '#fff',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      fontWeight: 600
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      border: 'none',
      background: 'none',
      fontSize: 16,
      cursor: 'pointer',
      color: 'var(--neutral-400)'
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("input", {
    value: query,
    onChange: e => setQuery(e.target.value),
    placeholder: "Search or type a new name",
    style: {
      width: '100%',
      boxSizing: 'border-box',
      borderRadius: 12,
      border: '1px solid var(--neutral-300)',
      padding: '12px 14px',
      fontSize: 15,
      marginBottom: 12
    }
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      maxHeight: 160,
      overflowY: 'auto'
    }
  }, filtered.map(s => /*#__PURE__*/React.createElement("li", {
    key: s
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onSelectExisting && onSelectExisting(s),
    style: {
      width: '100%',
      textAlign: 'left',
      border: 'none',
      background: 'none',
      padding: '12px 8px',
      fontSize: 15,
      color: 'var(--neutral-800)',
      cursor: 'pointer'
    }
  }, s)))), canCreate && /*#__PURE__*/React.createElement("button", {
    onClick: () => onCreateNew && onCreateNew(trimmed),
    style: {
      marginTop: 8,
      width: '100%',
      borderRadius: 12,
      border: 'none',
      padding: 12,
      fontWeight: 600,
      color: 'var(--gold-600)',
      background: 'var(--charcoal)',
      cursor: 'pointer'
    }
  }, "+ Add \"", trimmed, "\"")));
}
Object.assign(__ds_scope, { AddEntityBottomSheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/AddEntityBottomSheet.jsx", error: String((e && e.message) || e) }); }

// components/forms/FieldStatusIcon.jsx
try { (() => {
function FieldStatusIcon({
  complete
}) {
  return complete ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--success)',
      opacity: 0.7
    },
    title: "Complete"
  }, "\u2713") : /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--warning)'
    },
    title: "Missing"
  }, "\u26A0");
}
Object.assign(__ds_scope, { FieldStatusIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FieldStatusIcon.jsx", error: String((e && e.message) || e) }); }

// components/forms/PhotoCaptureControl.jsx
try { (() => {
function PhotoCaptureControl({
  photos = [],
  maxPhotos = 3,
  onAdd,
  onRemove
}) {
  const canAdd = photos.length < maxPhotos;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--neutral-900)',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, "Photo ", photos.length > 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--success)',
      opacity: .7
    }
  }, "\u2713") : /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--warning)'
    }
  }, "\u26A0")), photos.length > 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12,
      color: 'var(--neutral-400)'
    }
  }, photos.length, " of ", maxPhotos)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, photos.map((src, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'relative',
      width: 56,
      height: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 12,
      overflow: 'hidden',
      border: '1px solid var(--border-default)',
      background: `center/cover url(${src})`,
      backgroundColor: 'var(--neutral-100)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => onRemove && onRemove(i),
    style: {
      position: 'absolute',
      top: -6,
      right: -6,
      width: 18,
      height: 18,
      borderRadius: 9999,
      border: '1px solid var(--border-default)',
      background: '#fff',
      fontSize: 10,
      cursor: 'pointer'
    }
  }, "\u2715"))), canAdd && /*#__PURE__*/React.createElement("button", {
    onClick: onAdd,
    style: {
      width: 56,
      height: 56,
      borderRadius: 12,
      border: '1.5px dashed var(--neutral-400)',
      background: '#fff',
      color: 'var(--neutral-400)',
      fontSize: 20,
      cursor: 'pointer'
    }
  }, "+")));
}
Object.assign(__ds_scope, { PhotoCaptureControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/PhotoCaptureControl.jsx", error: String((e && e.message) || e) }); }

// components/forms/RatingScaleControl.jsx
try { (() => {
const labels = {
  5: 'Excellent',
  4: 'Good',
  3: 'Fair',
  2: 'Poor',
  1: 'Critical'
};
function btnStyle(option, selected) {
  let background = 'var(--neutral-100)',
    color = 'var(--neutral-600)';
  if (selected) {
    color = '#fff';
    background = option <= 2 ? 'var(--error)' : option >= 4 ? 'var(--success)' : 'var(--neutral-900)';
  }
  return {
    width: 28,
    height: 28,
    borderRadius: 9999,
    border: 'none',
    fontSize: 12,
    fontWeight: 600,
    background,
    color,
    cursor: 'pointer'
  };
}
function RatingScaleControl({
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 4,
      fontFamily: 'var(--font-sans)'
    }
  }, value != null && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 11,
      color: 'var(--neutral-600)'
    }
  }, labels[value]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, [1, 2, 3, 4, 5].map(o => /*#__PURE__*/React.createElement("button", {
    key: o,
    type: "button",
    onClick: () => onChange && onChange(o),
    style: btnStyle(o, value === o)
  }, o))));
}
Object.assign(__ds_scope, { RatingScaleControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RatingScaleControl.jsx", error: String((e && e.message) || e) }); }

// components/forms/TriStateControl.jsx
try { (() => {
const options = [{
  result: 'pass',
  label: 'Yes'
}, {
  result: 'fail',
  label: 'No'
}, {
  result: 'unable_to_test',
  label: '—'
}];
const resultBg = {
  pass: 'var(--success)',
  fail: 'var(--error)',
  unable_to_test: 'var(--neutral-600)'
};
function TriStateControl({
  value = 'untested',
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'inline-flex',
      borderRadius: 9999,
      border: '1px solid var(--border-default)',
      background: 'var(--neutral-100)',
      overflow: 'hidden',
      fontFamily: 'var(--font-sans)'
    }
  }, options.map(o => {
    const selected = value === o.result;
    return /*#__PURE__*/React.createElement("button", {
      key: o.result,
      type: "button",
      onClick: () => onChange && onChange(o.result),
      style: {
        height: 32,
        minWidth: 32,
        padding: '0 10px',
        border: 'none',
        fontSize: 12,
        fontWeight: 600,
        cursor: 'pointer',
        background: selected ? resultBg[o.result] : 'transparent',
        color: selected ? '#fff' : 'var(--neutral-600)'
      }
    }, o.label);
  }));
}
Object.assign(__ds_scope, { TriStateControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TriStateControl.jsx", error: String((e && e.message) || e) }); }

// components/inspection/FixtureRow.jsx
try { (() => {
function FixtureRow({
  name = 'Windows',
  done = false,
  issueCount = 0
}) {
  if (done) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: 14,
        background: '#fff',
        fontFamily: 'var(--font-sans)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        borderRadius: 9999,
        background: 'var(--success)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 13,
        flexShrink: 0
      }
    }, "\u2713"), /*#__PURE__*/React.createElement("p", {
      style: {
        flex: 1,
        margin: 0,
        fontSize: 15,
        fontWeight: 600,
        color: 'var(--neutral-900)'
      }
    }, name), issueCount > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        borderRadius: 9999,
        background: 'rgba(200,64,64,.1)',
        color: 'var(--error)',
        fontSize: 11,
        padding: '4px 10px'
      }
    }, issueCount, " issue", issueCount === 1 ? '' : 's'), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--neutral-400)'
      }
    }, "\u2304"));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: 14,
      borderBottom: '1px solid var(--neutral-100)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      flex: 1,
      margin: 0,
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--neutral-900)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      borderRadius: 9999,
      background: 'rgba(43,123,229,.12)',
      color: 'var(--info)',
      fontSize: 11,
      padding: '4px 10px'
    }
  }, "In Progress")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 14px',
      borderBottom: '1px solid var(--neutral-100)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--neutral-900)'
    }
  }, "Opens / closes smoothly"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      borderRadius: 9999,
      border: '1px solid var(--border-default)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '6px 10px',
      fontSize: 12,
      fontWeight: 600,
      background: 'var(--success)',
      color: '#fff'
    }
  }, "Yes"), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '6px 10px',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--neutral-600)'
    }
  }, "No"))));
}
Object.assign(__ds_scope, { FixtureRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/inspection/FixtureRow.jsx", error: String((e && e.message) || e) }); }

// components/inspection/FurnishingItemRow.jsx
try { (() => {
function FurnishingItemRow({
  name = 'Sofa',
  rating = null,
  faulty = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '14px 14px 10px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      flex: 1,
      margin: 0,
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--neutral-900)'
    }
  }, name)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      padding: '0 14px 14px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--neutral-900)'
    }
  }, "Condition rating"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, [1, 2, 3, 4, 5].map(o => /*#__PURE__*/React.createElement("span", {
    key: o,
    style: {
      width: 26,
      height: 26,
      borderRadius: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 11,
      fontWeight: 600,
      background: rating === o ? o <= 2 ? 'var(--error)' : o >= 4 ? 'var(--success)' : 'var(--neutral-900)' : 'var(--neutral-100)',
      color: rating === o ? '#fff' : 'var(--neutral-600)'
    }
  }, o))), !faulty && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: 'var(--neutral-400)',
      textDecoration: 'underline'
    }
  }, "Click here if item is faulty"))), faulty && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--neutral-100)',
      background: 'var(--neutral-50)',
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 6px',
      fontSize: 12,
      fontWeight: 500
    }
  }, "Item is faulty"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 8,
      border: '1px solid var(--neutral-200)',
      background: '#fff',
      padding: 10,
      fontSize: 13,
      color: 'var(--neutral-400)'
    }
  }, "Describe the fault\u2026")));
}
Object.assign(__ds_scope, { FurnishingItemRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/inspection/FurnishingItemRow.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomNav.jsx
try { (() => {
const tabs = [{
  label: 'Home',
  icon: '⌂'
}, {
  label: 'Reports',
  icon: '▤'
}, {
  label: 'Profile',
  icon: '◎'
}];
function BottomNav({
  active = 'Home'
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      borderTop: '1px solid var(--border-default)',
      background: '#fff',
      fontFamily: 'var(--font-sans)'
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.label,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2,
      padding: '8px 0',
      fontSize: 11,
      fontWeight: 500,
      color: active === t.label ? 'var(--jade-700)' : 'var(--neutral-600)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18
    }
  }, t.icon), t.label)));
}
Object.assign(__ds_scope, { BottomNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Header.jsx
try { (() => {
function Header({
  title = 'Tenify',
  showBack = false,
  showQuit = false
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottom: '1px solid var(--border-default)',
      background: 'rgba(255,255,255,0.95)',
      padding: '12px 16px',
      fontFamily: 'var(--font-sans)'
    }
  }, showBack && /*#__PURE__*/React.createElement("button", {
    style: {
      position: 'absolute',
      left: 8,
      border: 'none',
      background: 'none',
      fontSize: 18,
      cursor: 'pointer',
      color: 'var(--neutral-900)'
    }
  }, "\u2039"), showQuit && /*#__PURE__*/React.createElement("button", {
    style: {
      position: 'absolute',
      left: 12,
      border: 'none',
      background: 'none',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--link)',
      cursor: 'pointer'
    }
  }, "Quit"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--neutral-900)'
    }
  }, title));
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/App.jsx
try { (() => {
function App() {
  const steps = ['login', 'home', 'rooms', 'fixtures', 'inventory', 'review', 'report'];
  const [step, setStep] = React.useState('login');
  const go = s => () => setStep(s);
  const screen = {
    login: /*#__PURE__*/React.createElement(window.LoginScreen, {
      onLogin: go('home')
    }),
    home: /*#__PURE__*/React.createElement(window.HomeScreen, {
      onStart: go('rooms')
    }),
    rooms: /*#__PURE__*/React.createElement(window.RoomsScreen, {
      onBack: go('home'),
      onQuit: go('home'),
      onOpenRoom: go('fixtures')
    }),
    fixtures: /*#__PURE__*/React.createElement(window.FixturesScreen, {
      onBack: go('rooms'),
      onQuit: go('home'),
      onNext: go('inventory')
    }),
    inventory: /*#__PURE__*/React.createElement(window.InventoryScreen, {
      onBack: go('fixtures'),
      onQuit: go('home'),
      onSubmit: go('review')
    }),
    review: /*#__PURE__*/React.createElement(window.AIReviewScreen, {
      onBack: go('inventory'),
      onQuit: go('home'),
      onComplete: go('rooms')
    }),
    report: /*#__PURE__*/React.createElement(window.ReportScreen, {
      onBack: go('rooms')
    })
  }[step];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(window.PhoneShell, null, screen), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      justifyContent: 'center',
      maxWidth: 390
    }
  }, steps.map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: go(s),
    style: {
      border: 'none',
      borderRadius: 999,
      padding: '6px 12px',
      fontSize: 12,
      fontWeight: 600,
      cursor: 'pointer',
      background: step === s ? 'var(--jade-700)' : '#fff',
      color: step === s ? '#fff' : 'var(--neutral-600)',
      boxShadow: '0 1px 2px rgba(0,0,0,.08)'
    }
  }, s))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/App.standalone.jsx
try { (() => {
function Button({
  variant = 'primary',
  children,
  onClick
}) {
  const variants = {
    primary: {
      background: 'linear-gradient(135deg, var(--gold-600), var(--gold-400))',
      color: 'var(--charcoal)',
      borderRadius: 8,
      padding: '14px 20px'
    },
    secondary: {
      background: '#fff',
      color: 'var(--neutral-900)',
      border: '1px solid var(--border-default)',
      borderRadius: 12,
      padding: '13px 20px'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 15,
      border: 'none',
      cursor: 'pointer',
      width: '100%',
      ...variants[variant]
    }
  }, children);
}
function StatusBadge({
  tone = 'neutral',
  children
}) {
  const tones = {
    neutral: {
      background: 'rgba(43,123,229,0.12)',
      color: 'var(--info)'
    },
    success: {
      background: 'rgba(63,125,83,0.1)',
      color: 'var(--success)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      borderRadius: 9999,
      padding: '4px 10px',
      fontSize: 11,
      fontFamily: 'var(--font-sans)',
      ...tones[tone]
    }
  }, children);
}
function RatingScaleControl({
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, [1, 2, 3, 4, 5].map(o => /*#__PURE__*/React.createElement("span", {
    key: o,
    style: {
      width: 26,
      height: 26,
      borderRadius: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 11,
      fontWeight: 600,
      background: value === o ? o <= 2 ? 'var(--error)' : o >= 4 ? 'var(--success)' : 'var(--neutral-900)' : 'var(--neutral-100)',
      color: value === o ? '#fff' : 'var(--neutral-600)'
    }
  }, o)));
}
function BottomNav({
  active = 'Home'
}) {
  const tabs = [{
    label: 'Home',
    icon: '⌂'
  }, {
    label: 'Reports',
    icon: '▤'
  }, {
    label: 'Profile',
    icon: '◎'
  }];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      borderTop: '1px solid var(--border-default)',
      background: '#fff',
      fontFamily: 'var(--font-sans)'
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.label,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2,
      padding: '8px 0',
      fontSize: 11,
      fontWeight: 500,
      color: active === t.label ? 'var(--jade-700)' : 'var(--neutral-600)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18
    }
  }, t.icon), t.label)));
}
function FixtureRow({
  name = 'Windows',
  done = false,
  issueCount = 0
}) {
  if (done) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: 14,
        background: '#fff',
        fontFamily: 'var(--font-sans)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        borderRadius: 9999,
        background: 'var(--success)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 13,
        flexShrink: 0
      }
    }, "\u2713"), /*#__PURE__*/React.createElement("p", {
      style: {
        flex: 1,
        margin: 0,
        fontSize: 15,
        fontWeight: 600,
        color: 'var(--neutral-900)'
      }
    }, name), issueCount > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        borderRadius: 9999,
        background: 'rgba(200,64,64,.1)',
        color: 'var(--error)',
        fontSize: 11,
        padding: '4px 10px'
      }
    }, issueCount, " issue", issueCount === 1 ? '' : 's'), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--neutral-400)'
      }
    }, "\u2304"));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: 14,
      borderBottom: '1px solid var(--neutral-100)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      flex: 1,
      margin: 0,
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--neutral-900)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      borderRadius: 9999,
      background: 'rgba(43,123,229,.12)',
      color: 'var(--info)',
      fontSize: 11,
      padding: '4px 10px'
    }
  }, "In Progress")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 14px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--neutral-900)'
    }
  }, "Opens / closes smoothly"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      borderRadius: 9999,
      border: '1px solid var(--border-default)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '6px 10px',
      fontSize: 12,
      fontWeight: 600,
      background: 'var(--success)',
      color: '#fff'
    }
  }, "Yes"), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '6px 10px',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--neutral-600)'
    }
  }, "No"))));
}
function FurnishingItemRow({
  name = 'Sofa',
  rating = null,
  faulty = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '14px 14px 10px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      flex: 1,
      margin: 0,
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--neutral-900)'
    }
  }, name)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      padding: '0 14px 14px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--neutral-900)'
    }
  }, "Condition rating"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(RatingScaleControl, {
    value: rating
  }), !faulty && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: 'var(--neutral-400)',
      textDecoration: 'underline'
    }
  }, "Click here if item is faulty"))), faulty && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--neutral-100)',
      background: 'var(--neutral-50)',
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 6px',
      fontSize: 12,
      fontWeight: 500
    }
  }, "Item is faulty"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 8,
      border: '1px solid var(--neutral-200)',
      background: '#fff',
      padding: 10,
      fontSize: 13,
      color: 'var(--neutral-400)'
    }
  }, "Describe the fault\u2026")));
}
function PhoneShell({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 760,
      background: '#fff',
      borderRadius: 36,
      overflow: 'hidden',
      boxShadow: '0 24px 60px rgba(0,0,0,0.25)',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }
  }, children);
}
function TopBar({
  title,
  onBack,
  onQuit
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottom: '1px solid var(--border-default)',
      padding: '14px 16px',
      flexShrink: 0
    }
  }, onBack && /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      position: 'absolute',
      left: 10,
      border: 'none',
      background: 'none',
      fontSize: 20,
      cursor: 'pointer'
    }
  }, "\u2039"), onQuit && /*#__PURE__*/React.createElement("button", {
    onClick: onQuit,
    style: {
      position: 'absolute',
      left: 14,
      border: 'none',
      background: 'none',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--jade-700)',
      cursor: 'pointer'
    }
  }, "Quit"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      fontWeight: 600
    }
  }, title));
}
function LoginScreen({
  onLogin
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      background: 'var(--jade-50)',
      padding: '32px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources.tenifyLogo,
    alt: "Tenify",
    style: {
      height: 40
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      color: 'var(--jade-700)'
    }
  }, "Guided property inspections")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 20,
      padding: 20,
      boxShadow: 'var(--shadow-card)',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: '#374151'
    }
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    placeholder: "you@company.com",
    style: {
      width: '100%',
      boxSizing: 'border-box',
      marginTop: 4,
      borderRadius: 12,
      border: '1px solid #D1D5DB',
      padding: '12px 14px',
      fontSize: 15
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: '#374151'
    }
  }, "Password"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    style: {
      width: '100%',
      boxSizing: 'border-box',
      marginTop: 4,
      borderRadius: 12,
      border: '1px solid #D1D5DB',
      padding: '12px 14px',
      fontSize: 15
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onLogin
  }, "Log in")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      borderRadius: 16,
      border: '1px solid var(--jade-100)',
      background: '#fff',
      padding: 14,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      color: 'var(--neutral-700)'
    }
  }, "Not signed up? Visit ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--jade-700)',
      fontWeight: 600
    }
  }, "www.tenify.ae"))));
}
function HomeScreen({
  onStart
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: "Tenify"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      background: 'var(--neutral-100)',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onStart
  }, "+ New Inspection")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      margin: '0 0 12px'
    }
  }, "Your inspections"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 16,
      border: '1px solid var(--border-default)',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    tone: "neutral"
  }, "Scheduled"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12,
      color: 'var(--jade-700)',
      fontWeight: 600
    }
  }, "Appointment starts in 1h 20m")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 4px',
      fontWeight: 600
    }
  }, "Ahmed Al Marri"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 16px',
      fontSize: 13,
      color: 'var(--neutral-600)'
    }
  }, "Marina Gate 1, Apt 2204, Dubai Marina"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onStart
  }, "Start \u2192"))), /*#__PURE__*/React.createElement(BottomNav, {
    active: "Home"
  }));
}
const ROOMS = [{
  name: 'Living Room',
  status: 'complete'
}, {
  name: 'Kitchen',
  status: 'in-progress'
}, {
  name: 'Master Bedroom',
  status: 'not-started'
}, {
  name: 'Bathroom',
  status: 'not-started'
}];
const roomTone = {
  complete: 'success',
  'in-progress': 'neutral',
  'not-started': 'neutral'
};
const roomLabel = {
  complete: 'Done',
  'in-progress': 'In Progress',
  'not-started': 'Not Started'
};
function RoomsScreen({
  onBack,
  onOpenRoom,
  onQuit
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: "Apartment",
    onBack: onBack,
    onQuit: onQuit
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      background: 'var(--neutral-100)',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--neutral-600)',
      margin: '0 0 12px'
    }
  }, "Confirm the rooms below before starting."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, ROOMS.map(r => /*#__PURE__*/React.createElement("button", {
    key: r.name,
    onClick: onOpenRoom,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      border: '1px solid var(--border-default)',
      background: '#fff',
      borderRadius: 16,
      padding: 16,
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 600
    }
  }, r.name), /*#__PURE__*/React.createElement(StatusBadge, {
    tone: roomTone[r.status]
  }, roomLabel[r.status])))), /*#__PURE__*/React.createElement("button", {
    style: {
      marginTop: 12,
      width: '100%',
      border: '1.5px dashed var(--neutral-400)',
      borderRadius: 16,
      padding: 14,
      background: 'none',
      color: 'var(--neutral-600)',
      fontSize: 14,
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, "+ Add room")));
}
function FixturesScreen({
  onBack,
  onNext,
  onQuit
}) {
  const [tab, setTab] = React.useState('functional');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: "Fixtures",
    onBack: onBack,
    onQuit: onQuit
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      borderBottom: '1px solid var(--border-default)'
    }
  }, ['functional', 'inventory'].map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setTab(t),
    style: {
      flex: 1,
      padding: '10px 0',
      border: 'none',
      background: 'none',
      fontSize: 13,
      fontWeight: 600,
      color: tab === t ? 'var(--jade-700)' : 'var(--neutral-600)',
      borderBottom: tab === t ? '2px solid var(--jade-700)' : '2px solid transparent',
      cursor: 'pointer'
    }
  }, t === 'functional' ? 'Functional Tests' : 'Inventory'))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      background: 'var(--neutral-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 16,
      overflow: 'hidden',
      margin: 12,
      border: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement(FixtureRow, {
    name: "Windows",
    done: true,
    issueCount: 1
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--neutral-100)'
    }
  }), /*#__PURE__*/React.createElement(FixtureRow, {
    name: "Doors"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onNext
  }, "Continue to Inventory")));
}
function InventoryScreen({
  onBack,
  onSubmit,
  onQuit
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: "Furnishings",
    onBack: onBack,
    onQuit: onQuit
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      background: 'var(--neutral-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 16,
      overflow: 'hidden',
      margin: 12,
      border: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement(FurnishingItemRow, {
    name: "Sofa",
    rating: 4
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--neutral-100)'
    }
  }), /*#__PURE__*/React.createElement(FurnishingItemRow, {
    name: "Coffee Table",
    rating: null
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--neutral-100)'
    }
  }), /*#__PURE__*/React.createElement(FurnishingItemRow, {
    name: "Dining Chair",
    faulty: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onSubmit
  }, "Submit Room for AI Review")));
}
const AI_ITEMS = [{
  name: 'Sofa',
  rating: 4,
  note: 'Minor wear on left armrest, otherwise good condition'
}, {
  name: 'Coffee Table',
  rating: 5,
  note: 'No visible damage, excellent condition'
}, {
  name: 'Dining Chair',
  rating: 2,
  note: 'Loose joint on rear leg, needs attention'
}];
function AIReviewScreen({
  onBack,
  onComplete,
  onQuit
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: "AI Review",
    onBack: onBack,
    onQuit: onQuit
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      background: 'var(--neutral-100)',
      padding: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, AI_ITEMS.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.name,
    style: {
      background: '#fff',
      borderRadius: 16,
      border: '1px solid var(--border-default)',
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 600,
      fontSize: 15
    }
  }, it.name), /*#__PURE__*/React.createElement(RatingScaleControl, {
    value: it.rating
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 10px',
      fontSize: 13,
      color: 'var(--neutral-600)'
    }
  }, it.note), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      flex: 1,
      borderRadius: 10,
      border: 'none',
      background: 'var(--jade-50)',
      color: 'var(--jade-700)',
      fontWeight: 600,
      fontSize: 13,
      padding: '8px 0',
      cursor: 'pointer'
    }
  }, "Accept"), /*#__PURE__*/React.createElement("button", {
    style: {
      flex: 1,
      borderRadius: 10,
      border: '1px solid var(--border-default)',
      background: '#fff',
      color: 'var(--neutral-700)',
      fontWeight: 600,
      fontSize: 13,
      padding: '8px 0',
      cursor: 'pointer'
    }
  }, "Override"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onComplete
  }, "All items reviewed \u2014 Complete Room")));
}
function ReportScreen({
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: "Inspection Report",
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      background: 'var(--neutral-100)',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 16,
      border: '2px solid rgba(200,64,64,0.3)',
      padding: 14,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 8px',
      fontWeight: 700,
      color: 'var(--error)',
      fontSize: 13
    }
  }, "Must Fix (1)"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      color: 'var(--neutral-800)'
    }
  }, "Dining Chair \u2014 loose joint on rear leg")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 16,
      border: '2px solid rgba(185,133,42,0.3)',
      padding: 14,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 8px',
      fontWeight: 700,
      color: 'var(--warning)',
      fontSize: 13
    }
  }, "Recommended Fixes (1)"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      color: 'var(--neutral-800)'
    }
  }, "Sofa \u2014 minor wear on left armrest")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--neutral-500)'
    }
  }, "Full room-by-room breakdown continues below\u2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Share Report")));
}
function App() {
  const steps = ['login', 'home', 'rooms', 'fixtures', 'inventory', 'review', 'report'];
  const [step, setStep] = React.useState('login');
  const go = s => () => setStep(s);
  const screen = {
    login: /*#__PURE__*/React.createElement(LoginScreen, {
      onLogin: go('home')
    }),
    home: /*#__PURE__*/React.createElement(HomeScreen, {
      onStart: go('rooms')
    }),
    rooms: /*#__PURE__*/React.createElement(RoomsScreen, {
      onBack: go('home'),
      onQuit: go('home'),
      onOpenRoom: go('fixtures')
    }),
    fixtures: /*#__PURE__*/React.createElement(FixturesScreen, {
      onBack: go('rooms'),
      onQuit: go('home'),
      onNext: go('inventory')
    }),
    inventory: /*#__PURE__*/React.createElement(InventoryScreen, {
      onBack: go('fixtures'),
      onQuit: go('home'),
      onSubmit: go('review')
    }),
    review: /*#__PURE__*/React.createElement(AIReviewScreen, {
      onBack: go('inventory'),
      onQuit: go('home'),
      onComplete: go('rooms')
    }),
    report: /*#__PURE__*/React.createElement(ReportScreen, {
      onBack: go('rooms')
    })
  }[step];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(PhoneShell, null, screen), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      justifyContent: 'center',
      maxWidth: 390
    }
  }, steps.map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: go(s),
    style: {
      border: 'none',
      borderRadius: 999,
      padding: '6px 12px',
      fontSize: 12,
      fontWeight: 600,
      cursor: 'pointer',
      background: step === s ? 'var(--jade-700)' : '#fff',
      color: step === s ? '#fff' : 'var(--neutral-600)',
      boxShadow: '0 1px 2px rgba(0,0,0,.08)'
    }
  }, s))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/App.standalone.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Screens.jsx
try { (() => {
const DS = window.TenifyDesignSystem_762ad4;
const {
  Button,
  StatusBadge,
  RatingScaleControl
} = DS;
function PhoneShell({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 760,
      background: '#fff',
      borderRadius: 36,
      overflow: 'hidden',
      boxShadow: '0 24px 60px rgba(0,0,0,0.25)',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }
  }, children);
}
function TopBar({
  title,
  onBack,
  onQuit
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottom: '1px solid var(--border-default)',
      padding: '14px 16px',
      flexShrink: 0
    }
  }, onBack && /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      position: 'absolute',
      left: 10,
      border: 'none',
      background: 'none',
      fontSize: 20,
      cursor: 'pointer'
    }
  }, "\u2039"), onQuit && /*#__PURE__*/React.createElement("button", {
    onClick: onQuit,
    style: {
      position: 'absolute',
      left: 14,
      border: 'none',
      background: 'none',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--jade-700)',
      cursor: 'pointer'
    }
  }, "Quit"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      fontWeight: 600
    }
  }, title));
}
function LoginScreen({
  onLogin
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      background: 'var(--jade-50)',
      padding: '32px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/tenify-logo.png",
    alt: "Tenify",
    style: {
      height: 40
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      color: 'var(--jade-700)'
    }
  }, "Guided property inspections")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 20,
      padding: 20,
      boxShadow: 'var(--shadow-card)',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: '#374151'
    }
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    placeholder: "you@company.com",
    style: {
      width: '100%',
      boxSizing: 'border-box',
      marginTop: 4,
      borderRadius: 12,
      border: '1px solid #D1D5DB',
      padding: '12px 14px',
      fontSize: 15
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: '#374151'
    }
  }, "Password"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    style: {
      width: '100%',
      boxSizing: 'border-box',
      marginTop: 4,
      borderRadius: 12,
      border: '1px solid #D1D5DB',
      padding: '12px 14px',
      fontSize: 15
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onLogin
  }, "Log in")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      borderRadius: 16,
      border: '1px solid var(--jade-100)',
      background: '#fff',
      padding: 14,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      color: 'var(--neutral-700)'
    }
  }, "Not signed up? Visit ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--jade-700)',
      fontWeight: 600
    }
  }, "www.tenify.ae"))));
}
function HomeScreen({
  onStart
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: "Tenify"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      background: 'var(--neutral-100)',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onStart
  }, "+ New Inspection")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      margin: '0 0 12px'
    }
  }, "Your inspections"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 16,
      border: '1px solid var(--border-default)',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    tone: "neutral"
  }, "Scheduled"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12,
      color: 'var(--jade-700)',
      fontWeight: 600
    }
  }, "Appointment starts in 1h 20m")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 4px',
      fontWeight: 600
    }
  }, "Ahmed Al Marri"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 16px',
      fontSize: 13,
      color: 'var(--neutral-600)'
    }
  }, "Marina Gate 1, Apt 2204, Dubai Marina"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onStart
  }, "Start \u2192"))), /*#__PURE__*/React.createElement(DS.BottomNav, {
    active: "Home"
  }));
}
const ROOMS = [{
  name: 'Living Room',
  status: 'complete'
}, {
  name: 'Kitchen',
  status: 'in-progress'
}, {
  name: 'Master Bedroom',
  status: 'not-started'
}, {
  name: 'Bathroom',
  status: 'not-started'
}];
const roomTone = {
  complete: 'success',
  'in-progress': 'neutral',
  'not-started': 'neutral'
};
const roomLabel = {
  complete: 'Done',
  'in-progress': 'In Progress',
  'not-started': 'Not Started'
};
function RoomsScreen({
  onBack,
  onOpenRoom,
  onQuit
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: "Apartment",
    onBack: onBack,
    onQuit: onQuit
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      background: 'var(--neutral-100)',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--neutral-600)',
      margin: '0 0 12px'
    }
  }, "Confirm the rooms below before starting."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, ROOMS.map(r => /*#__PURE__*/React.createElement("button", {
    key: r.name,
    onClick: onOpenRoom,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      border: '1px solid var(--border-default)',
      background: '#fff',
      borderRadius: 16,
      padding: 16,
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 600
    }
  }, r.name), /*#__PURE__*/React.createElement(StatusBadge, {
    tone: roomTone[r.status]
  }, roomLabel[r.status])))), /*#__PURE__*/React.createElement("button", {
    style: {
      marginTop: 12,
      width: '100%',
      border: '1.5px dashed var(--neutral-400)',
      borderRadius: 16,
      padding: 14,
      background: 'none',
      color: 'var(--neutral-600)',
      fontSize: 14,
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, "+ Add room")));
}
function FixturesScreen({
  onBack,
  onNext,
  onQuit
}) {
  const [tab, setTab] = React.useState('functional');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: "Fixtures",
    onBack: onBack,
    onQuit: onQuit
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      borderBottom: '1px solid var(--border-default)'
    }
  }, ['functional', 'inventory'].map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setTab(t),
    style: {
      flex: 1,
      padding: '10px 0',
      border: 'none',
      background: 'none',
      fontSize: 13,
      fontWeight: 600,
      color: tab === t ? 'var(--jade-700)' : 'var(--neutral-600)',
      borderBottom: tab === t ? '2px solid var(--jade-700)' : '2px solid transparent',
      cursor: 'pointer'
    }
  }, t === 'functional' ? 'Functional Tests' : 'Inventory'))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      background: 'var(--neutral-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 16,
      overflow: 'hidden',
      margin: 12,
      border: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement(DS.FixtureRow, {
    name: "Windows",
    done: true,
    issueCount: 1
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--neutral-100)'
    }
  }), /*#__PURE__*/React.createElement(DS.FixtureRow, {
    name: "Doors"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onNext
  }, "Continue to Inventory")));
}
function InventoryScreen({
  onBack,
  onSubmit,
  onQuit
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: "Furnishings",
    onBack: onBack,
    onQuit: onQuit
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      background: 'var(--neutral-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 16,
      overflow: 'hidden',
      margin: 12,
      border: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement(DS.FurnishingItemRow, {
    name: "Sofa",
    rating: 4
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--neutral-100)'
    }
  }), /*#__PURE__*/React.createElement(DS.FurnishingItemRow, {
    name: "Coffee Table",
    rating: null
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--neutral-100)'
    }
  }), /*#__PURE__*/React.createElement(DS.FurnishingItemRow, {
    name: "Dining Chair",
    faulty: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onSubmit
  }, "Submit Room for AI Review")));
}
const AI_ITEMS = [{
  name: 'Sofa',
  rating: 4,
  note: 'Minor wear on left armrest, otherwise good condition'
}, {
  name: 'Coffee Table',
  rating: 5,
  note: 'No visible damage, excellent condition'
}, {
  name: 'Dining Chair',
  rating: 2,
  note: 'Loose joint on rear leg, needs attention'
}];
function AIReviewScreen({
  onBack,
  onComplete,
  onQuit
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: "AI Review",
    onBack: onBack,
    onQuit: onQuit
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      background: 'var(--neutral-100)',
      padding: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, AI_ITEMS.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.name,
    style: {
      background: '#fff',
      borderRadius: 16,
      border: '1px solid var(--border-default)',
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 600,
      fontSize: 15
    }
  }, it.name), /*#__PURE__*/React.createElement(RatingScaleControl, {
    value: it.rating
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 10px',
      fontSize: 13,
      color: 'var(--neutral-600)'
    }
  }, it.note), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      flex: 1,
      borderRadius: 10,
      border: 'none',
      background: 'var(--jade-50)',
      color: 'var(--jade-700)',
      fontWeight: 600,
      fontSize: 13,
      padding: '8px 0',
      cursor: 'pointer'
    }
  }, "Accept"), /*#__PURE__*/React.createElement("button", {
    style: {
      flex: 1,
      borderRadius: 10,
      border: '1px solid var(--border-default)',
      background: '#fff',
      color: 'var(--neutral-700)',
      fontWeight: 600,
      fontSize: 13,
      padding: '8px 0',
      cursor: 'pointer'
    }
  }, "Override"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onComplete
  }, "All items reviewed \u2014 Complete Room")));
}
function ReportScreen({
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: "Inspection Report",
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      background: 'var(--neutral-100)',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 16,
      border: '2px solid rgba(200,64,64,0.3)',
      padding: 14,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 8px',
      fontWeight: 700,
      color: 'var(--error)',
      fontSize: 13
    }
  }, "Must Fix (1)"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      color: 'var(--neutral-800)'
    }
  }, "Dining Chair \u2014 loose joint on rear leg")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 16,
      border: '2px solid rgba(185,133,42,0.3)',
      padding: 14,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 8px',
      fontWeight: 700,
      color: 'var(--warning)',
      fontSize: 13
    }
  }, "Recommended Fixes (1)"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      color: 'var(--neutral-800)'
    }
  }, "Sofa \u2014 minor wear on left armrest")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--neutral-500)'
    }
  }, "Full room-by-room breakdown continues below\u2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Share Report")));
}
Object.assign(window, {
  PhoneShell,
  LoginScreen,
  HomeScreen,
  RoomsScreen,
  FixturesScreen,
  InventoryScreen,
  AIReviewScreen,
  ReportScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.ListSkeleton = __ds_scope.ListSkeleton;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.ConfirmDialog = __ds_scope.ConfirmDialog;

__ds_ns.OfflineBanner = __ds_scope.OfflineBanner;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.AddEntityBottomSheet = __ds_scope.AddEntityBottomSheet;

__ds_ns.FieldStatusIcon = __ds_scope.FieldStatusIcon;

__ds_ns.PhotoCaptureControl = __ds_scope.PhotoCaptureControl;

__ds_ns.RatingScaleControl = __ds_scope.RatingScaleControl;

__ds_ns.TriStateControl = __ds_scope.TriStateControl;

__ds_ns.FixtureRow = __ds_scope.FixtureRow;

__ds_ns.FurnishingItemRow = __ds_scope.FurnishingItemRow;

__ds_ns.BottomNav = __ds_scope.BottomNav;

__ds_ns.Header = __ds_scope.Header;

})();

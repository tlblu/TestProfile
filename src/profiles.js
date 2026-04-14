// profiles.js — shared profile storage utilities

const STORAGE_KEY = 'profile_manager_profiles';

function loadProfiles() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveProfiles(profiles) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profiles));
}

// Triggers a download of the profile as a JSON file:  assets/PROFILE_0000001.json
function saveProfileFile(profile) {
  const filename = `PROFILE_${profile.id}.json`;
  const data = {
    profile_id: profile.id,
    name: profile.name,
    birthday: profile.birthday,
    created: profile.created,
    file: `assets/${filename}`
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
import { useState, useEffect } from "react";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState(
    localStorage.getItem("profileName") || "Supreya"
  );

  const [email, setEmail] = useState(
    localStorage.getItem("profileEmail") ||
      "supreya@gmail.com"
  );

  const [department, setDepartment] = useState(
    localStorage.getItem("profileDepartment") ||
      "IT"
  );

  useEffect(() => {
    localStorage.setItem("profileName", name);
    localStorage.setItem("profileEmail", email);
    localStorage.setItem(
      "profileDepartment",
      department
    );
  }, [name, email, department]);

  const saveProfile = () => {
    setIsEditing(false);
    alert("Profile Updated Successfully!");
  };

  return (
    <div className="profile-card">
      <img
        src="https://i.pravatar.cc/150?img=32"
        alt="profile"
        className="profile-img"
      />

      {isEditing ? (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="text"
            value={department}
            onChange={(e) =>
              setDepartment(e.target.value)
            }
          />

          <button
            className="edit-profile-btn"
            onClick={saveProfile}
          >
            Save Profile
          </button>
        </>
      ) : (
        <>
          <h2>{name}</h2>

          <span className="premium-badge">
            Premium User
          </span>

          <div className="profile-info">
            <p>
              <strong>Email:</strong> {email}
            </p>

            <p>
              <strong>Department:</strong>{" "}
              {department}
            </p>

            <p>
              <strong>Role:</strong> Student
            </p>
          </div>

          <button
            className="edit-profile-btn"
            onClick={() =>
              setIsEditing(true)
            }
          >
            Edit Profile
          </button>
        </>
      )}
    </div>
  );
}

export default Profile;
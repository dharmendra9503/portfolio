import React from 'react';
import './CodingProfile.css';
import LeetCode from '../../assets/LeetCode.svg';
import GFG from '../../assets/GeeksForGeeks.svg';
import CodeChef from '../../assets/CodeChef.svg';

const CodingProfile = () => {
  return (
    <div className="cp_profile cp_profile__section">
      <h2 className="section__title">Coding Profile</h2>

      <div className="container cp_container">

        <div class="card" id='card-1'>
          <a href='https://leetcode.com/Dharmendra_9503/' target='_blank' rel="noreferrer">
            <img src={LeetCode} alt="LeetCode" class="profile-picture leetcode_picture" />
            <div class="card-content">
              <p>Contest Rating: 1322</p>
            </div>
          </a>
        </div>

        <div class="card" id='card-2'>
          <a href='https://auth.geeksforgeeks.org/user/dharmendra9503' target='_blank' rel="noreferrer">
            <img src={GFG} alt="GeeksForGeeks" class="profile-picture gfg_picture" />
            <div class="card-content">
              <p>6<sup>th</sup> Rank at University Level</p>
            </div>
          </a>
        </div>

        <div class="card" id='card-3'>
          <a href='https://www.codechef.com/users/dharmendra9503' target='_blank' rel="noreferrer">
            <img src={CodeChef} alt="CodeChef" class="profile-picture codechef_piucture" />
            <div class="card-content">
              <p>Contest Rating: 1363</p>
            </div>
          </a>

        </div>
      </div>
    </div>
  )
}

export default CodingProfile;

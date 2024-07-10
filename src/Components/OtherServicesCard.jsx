import React from 'react';
import '../Style/OtherServicesCard.scss';
import { HiOutlineArrowSmRight } from 'react-icons/hi';
import { otherServices } from '../Data/HomeServices';

function OtherServicesCard() {
  return (
    <>
      {otherServices.map(
        ({ backImg, icon, id, title, paragraph, detailsLink }) => {
          return (

            <div className='other-services-card' key={id}>
              <div>
                <img src={backImg} className='service-img' />
              </div>
              <div className='content-wrapper'>
                <div className='icon'>
                  <img src={icon} />
                </div>
                <div className='content'>
                  <a href={detailsLink} target='blank'></a>
                  <h4>{title}</h4>
                  <p>{paragraph}</p>
                  <a href={detailsLink} target='blank'>
                    DETAILS
                    <HiOutlineArrowSmRight />
                  </a>
                </div>
              </div>
            </div>
          )
          }
        )}
    </>
  );
}

export default OtherServicesCard;

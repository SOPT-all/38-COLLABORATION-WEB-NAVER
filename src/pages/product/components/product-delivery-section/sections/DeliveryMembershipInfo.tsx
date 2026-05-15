import membershipTagImage from '@/shared/assets/images/img-tag-membership-lg.png';
import {IcSvgNotice} from '@/shared/icons';

type DeliveryMembershipInfoProps = {
  membershipText: string;
};

export const DeliveryMembershipInfo = ({
  membershipText,
}: DeliveryMembershipInfoProps) => {
  return (
    <div className='flex h-[2.3rem] w-[26.1rem] items-center gap-[0.4rem]'>
      <img
        src={membershipTagImage}
        alt='N+ 멤버십'
        className='h-[1.5rem] w-[5.7rem] shrink-0'
      />
      <span className='text-body-14m h-[1.7rem] w-[17.2rem] text-gray-900'>
        {membershipText}
      </span>
      <IcSvgNotice
        aria-hidden='true'
        className='size-[2.4rem] shrink-0 text-gray-700'
      />
    </div>
  );
};

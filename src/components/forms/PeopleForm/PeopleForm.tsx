import { useEffect } from 'react';
import { peopleFormSchema, type TPeopleForm } from '.';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import { Button, Input, Label } from '@/components/ui';
import type { TPeople } from '@/types';

interface PeopleFormProps {
  data: TPeople;
  isLoading: boolean;
  isSuccess: boolean;
}

export function PeopleForm({ data, isLoading, isSuccess }: PeopleFormProps) {
  const {
    reset,
    clearErrors,
    handleSubmit,
    setError,
    control,
    formState: { errors },
    setValue
  } = useForm<TPeopleForm>({
    resolver: zodResolver(peopleFormSchema)
  });

  useEffect(() => {
    if (!isLoading && isSuccess) {
      setValue('height', data?.height);
      setValue('mass', data?.mass);
      setValue('hair_color', data?.hair_color);
      setValue('skin_color', data?.skin_color);
      setValue('eye_color', data?.eye_color);
      setValue('birth_year', data?.birth_year);
      setValue('gender', data?.gender);
    }
  }, [isLoading, isSuccess]);

  const onSubmit = async ({
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender
  }: TPeopleForm) => {
    try {
      console.log(
        height,
        mass,
        hair_color,
        skin_color,
        eye_color,
        birth_year,
        gender
      );
      // TODO: add cache mutation
    } catch (e) {
      setError('root', {
        type: 'custom',
        message: `Error: ${e instanceof Error ? e.message : 'internal error'}`
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        {/* Height */}
        <div className="flex flex-col gap-1 lg:gap-3 lg:basis-1/2">
          <Label htmlFor="height">Height</Label>
          <div className="flex flex-col gap-1">
            <Controller
              name="height"
              control={control}
              defaultValue={''}
              render={({ field: { onChange, value, name, ref } }) => (
                <Input
                  type="text"
                  placeholder=""
                  maxLength={32}
                  id="height"
                  name={name}
                  value={value}
                  onChange={onChange}
                  ref={ref}
                />
              )}
            />
            {errors.height && (
              <span className="text-red-400">{errors.height.message}</span>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1 lg:gap-3 lg:basis-1/2">
          <Label htmlFor="mass">Mass</Label>
          <div className="flex flex-col gap-1">
            <Controller
              name="mass"
              control={control}
              defaultValue={''}
              render={({ field: { onChange, value, name, ref } }) => (
                <Input
                  type="text"
                  placeholder=""
                  maxLength={32}
                  id="mass"
                  name={name}
                  value={value}
                  onChange={onChange}
                  ref={ref}
                />
              )}
            />
            {errors.mass && (
              <span className="text-red-400">{errors.mass.message}</span>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {/* Hair Color */}
        <div className="flex flex-col gap-1 lg:gap-3 lg:basis-1/2">
          <Label htmlFor="hair_color">Hair Color</Label>
          <div className="flex flex-col gap-1">
            <Controller
              name="hair_color"
              control={control}
              defaultValue={''}
              render={({ field: { onChange, value, name, ref } }) => (
                <Input
                  type="text"
                  placeholder=""
                  maxLength={32}
                  id="hair_color"
                  name={name}
                  value={value}
                  onChange={onChange}
                  ref={ref}
                />
              )}
            />
            {errors.hair_color && (
              <span className="text-red-400">{errors.hair_color.message}</span>
            )}
          </div>
        </div>
        {/* Skin Color */}
        <div className="flex flex-col gap-1 lg:gap-3 lg:basis-1/2">
          <Label htmlFor="skin_color">Skin Color</Label>
          <div className="flex flex-col gap-1">
            <Controller
              name="skin_color"
              control={control}
              defaultValue={''}
              render={({ field: { onChange, value, name, ref } }) => (
                <Input
                  type="text"
                  placeholder=""
                  maxLength={32}
                  id="skin_color"
                  name={name}
                  value={value}
                  onChange={onChange}
                  ref={ref}
                />
              )}
            />
            {errors.skin_color && (
              <span className="text-red-400">{errors.skin_color.message}</span>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {/* Eye Color */}
        <div className="flex flex-col gap-1 lg:gap-3 lg:basis-1/2">
          <Label htmlFor="eye_color">Eye Color</Label>
          <div className="flex flex-col gap-1">
            <Controller
              name="eye_color"
              control={control}
              defaultValue={''}
              render={({ field: { onChange, value, name, ref } }) => (
                <Input
                  type="text"
                  placeholder=""
                  maxLength={32}
                  id="eye_color"
                  name={name}
                  value={value}
                  onChange={onChange}
                  ref={ref}
                />
              )}
            />
            {errors.eye_color && (
              <span className="text-red-400">{errors.eye_color.message}</span>
            )}
          </div>
        </div>
        {/* Birth Year */}
        <div className="flex flex-col gap-1 lg:gap-3 lg:basis-1/2">
          <Label htmlFor="birth_year">Birth Year</Label>
          <div className="flex flex-col gap-1">
            <Controller
              name="birth_year"
              control={control}
              defaultValue={''}
              render={({ field: { onChange, value, name, ref } }) => (
                <Input
                  type="text"
                  placeholder=""
                  maxLength={32}
                  id="birth_year"
                  name={name}
                  value={value}
                  onChange={onChange}
                  ref={ref}
                />
              )}
            />
            {errors.birth_year && (
              <span className="text-red-400">{errors.birth_year.message}</span>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {/* Gender */}
        <div className="flex flex-col gap-1 lg:gap-3 lg:basis-1/2">
          <Label htmlFor="gender">Gender</Label>
          <div className="flex flex-col gap-1">
            <Controller
              name="gender"
              control={control}
              defaultValue={''}
              render={({ field: { onChange, value, name, ref } }) => (
                <Input
                  type="text"
                  placeholder=""
                  maxLength={32}
                  id="gender"
                  name={name}
                  value={value}
                  onChange={onChange}
                  ref={ref}
                />
              )}
            />
            {errors.gender && (
              <span className="text-red-400">{errors.gender.message}</span>
            )}
          </div>
        </div>
      </div>

      <Button>Save</Button>
    </form>
  );
}

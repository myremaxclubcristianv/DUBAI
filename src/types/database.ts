// Database Types matching the Supabase schema

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      sources: {
        Row: {
          id: string
          name: string
          type: string
          url: string | null
          authority: string | null
          status: string
          last_checked: string | null
          last_successful_retrieval: string | null
          data_categories: string[] | null
          update_frequency: string | null
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          type: string
          url?: string | null
          authority?: string | null
          status?: string
          last_checked?: string | null
          last_successful_retrieval?: string | null
          data_categories?: string[] | null
          update_frequency?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          type?: string
          url?: string | null
          authority?: string | null
          status?: string
          last_checked?: string | null
          last_successful_retrieval?: string | null
          data_categories?: string[] | null
          update_frequency?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      source_records: {
        Row: {
          id: string
          source_id: string
          source_reference: string | null
          publication_date: string | null
          data_period_start: string | null
          data_period_end: string | null
          retrieved_at: string
          verified_at: string | null
          verification_status: string
          confidence_level: string | null
          original_value: string | null
          notes: string | null
          created_at: string
        }
        Insert: {
          id?: string
          source_id: string
          source_reference?: string | null
          publication_date?: string | null
          data_period_start?: string | null
          data_period_end?: string | null
          retrieved_at?: string
          verified_at?: string | null
          verification_status?: string
          confidence_level?: string | null
          original_value?: string | null
          notes?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          source_id?: string
          source_reference?: string | null
          publication_date?: string | null
          data_period_start?: string | null
          data_period_end?: string | null
          retrieved_at?: string
          verified_at?: string | null
          verification_status?: string
          confidence_level?: string | null
          original_value?: string | null
          notes?: string | null
          created_at?: string
        }
      }
      users: {
        Row: {
          id: string
          email: string
          full_name: string | null
          phone: string | null
          role: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          full_name?: string | null
          phone?: string | null
          role?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          phone?: string | null
          role?: string
          created_at?: string
          updated_at?: string
        }
      }
      developers: {
        Row: {
          id: string
          legal_name: string
          display_name: string | null
          developer_id: string | null
          license_number: string | null
          license_expiry: string | null
          official_website: string | null
          contact_email: string | null
          contact_phone: string | null
          office_address: string | null
          description: string | null
          status: string
          source_id: string | null
          source_record_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          legal_name: string
          display_name?: string | null
          developer_id?: string | null
          license_number?: string | null
          license_expiry?: string | null
          official_website?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          office_address?: string | null
          description?: string | null
          status?: string
          source_id?: string | null
          source_record_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          legal_name?: string
          display_name?: string | null
          developer_id?: string | null
          license_number?: string | null
          license_expiry?: string | null
          official_website?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          office_address?: string | null
          description?: string | null
          status?: string
          source_id?: string | null
          source_record_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      projects: {
        Row: {
          id: string
          name: string
          developer_id: string
          master_developer: string | null
          location: string
          community: string
          district: string | null
          coordinates_latitude: number | null
          coordinates_longitude: number | null
          project_identifier: string | null
          status: string
          construction_status: string | null
          completion_date: string | null
          handover_date: string | null
          number_of_buildings: number | null
          total_units: number | null
          project_value: number | null
          escrow_account: string | null
          escrow_bank: string | null
          unit_types: string[] | null
          starting_price: number | null
          current_price_from: number | null
          price_per_sqft: number | null
          payment_plan: string | null
          service_charge_per_sqft: number | null
          amenities: string[] | null
          nearby_infrastructure: string[] | null
          official_brochure_url: string | null
          floorplans_url: string | null
          official_website: string | null
          source_id: string | null
          source_record_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          developer_id: string
          master_developer?: string | null
          location: string
          community: string
          district?: string | null
          coordinates_latitude?: number | null
          coordinates_longitude?: number | null
          project_identifier?: string | null
          status?: string
          construction_status?: string | null
          completion_date?: string | null
          handover_date?: string | null
          number_of_buildings?: number | null
          total_units?: number | null
          project_value?: number | null
          escrow_account?: string | null
          escrow_bank?: string | null
          unit_types?: string[] | null
          starting_price?: number | null
          current_price_from?: number | null
          price_per_sqft?: number | null
          payment_plan?: string | null
          service_charge_per_sqft?: number | null
          amenities?: string[] | null
          nearby_infrastructure?: string[] | null
          official_brochure_url?: string | null
          floorplans_url?: string | null
          official_website?: string | null
          source_id?: string | null
          source_record_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          developer_id?: string
          master_developer?: string | null
          location?: string
          community?: string
          district?: string | null
          coordinates_latitude?: number | null
          coordinates_longitude?: number | null
          project_identifier?: string | null
          status?: string
          construction_status?: string | null
          completion_date?: string | null
          handover_date?: string | null
          number_of_buildings?: number | null
          total_units?: number | null
          project_value?: number | null
          escrow_account?: string | null
          escrow_bank?: string | null
          unit_types?: string[] | null
          starting_price?: number | null
          current_price_from?: number | null
          price_per_sqft?: number | null
          payment_plan?: string | null
          service_charge_per_sqft?: number | null
          amenities?: string[] | null
          nearby_infrastructure?: string[] | null
          official_brochure_url?: string | null
          floorplans_url?: string | null
          official_website?: string | null
          source_id?: string | null
          source_record_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      properties: {
        Row: {
          id: string
          property_id: string | null
          listing_status: string
          transaction_type: string
          property_type: string
          asking_price: number | null
          asking_price_currency: string
          transaction_price: number | null
          transaction_price_currency: string
          market_estimate: number | null
          market_estimate_currency: string
          internal_area_sqft: number | null
          internal_area_sqm: number | null
          plot_area_sqft: number | null
          plot_area_sqm: number | null
          bedrooms: number | null
          bathrooms: number | null
          parking_spaces: number | null
          floor_number: number | null
          view: string | null
          has_balcony: boolean
          has_terrace: boolean
          furnishing_status: string | null
          building_name: string | null
          project_id: string | null
          developer_id: string | null
          community: string
          district: string | null
          location: string
          coordinates_latitude: number | null
          coordinates_longitude: number | null
          completion_status: string | null
          completion_date: string | null
          handover_date: string | null
          payment_plan: string | null
          service_charge_per_year: number | null
          rental_price_monthly: number | null
          rental_price_annual: number | null
          rental_price_currency: string
          amenities: string[] | null
          description: string | null
          images: string[] | null
          floorplan_url: string | null
          video_url: string | null
          documents: string[] | null
          source_id: string | null
          source_record_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          property_id?: string | null
          listing_status?: string
          transaction_type: string
          property_type: string
          asking_price?: number | null
          asking_price_currency?: string
          transaction_price?: number | null
          transaction_price_currency?: string
          market_estimate?: number | null
          market_estimate_currency?: string
          internal_area_sqft?: number | null
          internal_area_sqm?: number | null
          plot_area_sqft?: number | null
          plot_area_sqm?: number | null
          bedrooms?: number | null
          bathrooms?: number | null
          parking_spaces?: number | null
          floor_number?: number | null
          view?: string | null
          has_balcony?: boolean
          has_terrace?: boolean
          furnishing_status?: string | null
          building_name?: string | null
          project_id?: string | null
          developer_id?: string | null
          community: string
          district?: string | null
          location: string
          coordinates_latitude?: number | null
          coordinates_longitude?: number | null
          completion_status?: string | null
          completion_date?: string | null
          handover_date?: string | null
          payment_plan?: string | null
          service_charge_per_year?: number | null
          rental_price_monthly?: number | null
          rental_price_annual?: number | null
          rental_price_currency?: string
          amenities?: string[] | null
          description?: string | null
          images?: string[] | null
          floorplan_url?: string | null
          video_url?: string | null
          documents?: string[] | null
          source_id?: string | null
          source_record_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          property_id?: string | null
          listing_status?: string
          transaction_type?: string
          property_type?: string
          asking_price?: number | null
          asking_price_currency?: string
          transaction_price?: number | null
          transaction_price_currency?: string
          market_estimate?: number | null
          market_estimate_currency?: string
          internal_area_sqft?: number | null
          internal_area_sqm?: number | null
          plot_area_sqft?: number | null
          plot_area_sqm?: number | null
          bedrooms?: number | null
          bathrooms?: number | null
          parking_spaces?: number | null
          floor_number?: number | null
          view?: string | null
          has_balcony?: boolean
          has_terrace?: boolean
          furnishing_status?: string | null
          building_name?: string | null
          project_id?: string | null
          developer_id?: string | null
          community?: string
          district?: string | null
          location?: string
          coordinates_latitude?: number | null
          coordinates_longitude?: number | null
          completion_status?: string | null
          completion_date?: string | null
          handover_date?: string | null
          payment_plan?: string | null
          service_charge_per_year?: number | null
          rental_price_monthly?: number | null
          rental_price_annual?: number | null
          rental_price_currency?: string
          amenities?: string[] | null
          description?: string | null
          images?: string[] | null
          floorplan_url?: string | null
          video_url?: string | null
          documents?: string[] | null
          source_id?: string | null
          source_record_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      transactions: {
        Row: {
          id: string
          transaction_id: string | null
          property_id: string | null
          transaction_date: string
          transaction_amount: number
          currency: string
          property_size_sqft: number | null
          price_per_sqft: number | null
          property_type: string | null
          bedrooms: number | null
          project_id: string | null
          building_name: string | null
          developer_id: string | null
          community: string | null
          district: string | null
          transaction_type: string | null
          previous_transaction_id: string | null
          source_id: string | null
          source_record_id: string | null
          created_at: string
        }
        Insert: {
          id?: string
          transaction_id?: string | null
          property_id?: string | null
          transaction_date: string
          transaction_amount: number
          currency?: string
          property_size_sqft?: number | null
          price_per_sqft?: number | null
          property_type?: string | null
          bedrooms?: number | null
          project_id?: string | null
          building_name?: string | null
          developer_id?: string | null
          community?: string | null
          district?: string | null
          transaction_type?: string | null
          previous_transaction_id?: string | null
          source_id?: string | null
          source_record_id?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          transaction_id?: string | null
          property_id?: string | null
          transaction_date?: string
          transaction_amount?: number
          currency?: string
          property_size_sqft?: number | null
          price_per_sqft?: number | null
          property_type?: string | null
          bedrooms?: number | null
          project_id?: string | null
          building_name?: string | null
          developer_id?: string | null
          community?: string | null
          district?: string | null
          transaction_type?: string | null
          previous_transaction_id?: string | null
          source_id?: string | null
          source_record_id?: string | null
          created_at?: string
        }
      }
      areas: {
        Row: {
          id: string
          name: string
          type: string | null
          parent_area_id: string | null
          description: string | null
          coordinates_latitude: number | null
          coordinates_longitude: number | null
          metro_stations: string[] | null
          schools: string[] | null
          hospitals: string[] | null
          malls: string[] | null
          beaches_nearby: boolean | null
          golf_courses_nearby: boolean | null
          airports_nearby: string[] | null
          lifestyle_tags: string[] | null
          investment_characteristics: string[] | null
          source_id: string | null
          source_record_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          type?: string | null
          parent_area_id?: string | null
          description?: string | null
          coordinates_latitude?: number | null
          coordinates_longitude?: number | null
          metro_stations?: string[] | null
          schools?: string[] | null
          hospitals?: string[] | null
          malls?: string[] | null
          beaches_nearby?: boolean | null
          golf_courses_nearby?: boolean | null
          airports_nearby?: string[] | null
          lifestyle_tags?: string[] | null
          investment_characteristics?: string[] | null
          source_id?: string | null
          source_record_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          type?: string | null
          parent_area_id?: string | null
          description?: string | null
          coordinates_latitude?: number | null
          coordinates_longitude?: number | null
          metro_stations?: string[] | null
          schools?: string[] | null
          hospitals?: string[] | null
          malls?: string[] | null
          beaches_nearby?: boolean | null
          golf_courses_nearby?: boolean | null
          airports_nearby?: string[] | null
          lifestyle_tags?: string[] | null
          investment_characteristics?: string[] | null
          source_id?: string | null
          source_record_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      yachts: {
        Row: {
          id: string
          name: string
          model: string | null
          operator: string | null
          length_feet: number | null
          guests_capacity: number | null
          cabins: number | null
          crew: number | null
          departure_marina: string | null
          duration_hours: number | null
          route: string | null
          catering_included: boolean | null
          water_toys: string[] | null
          price_per_hour: number | null
          price_per_day: number | null
          currency: string
          availability_status: string | null
          license_number: string | null
          verified: boolean
          contact_email: string | null
          contact_phone: string | null
          website: string | null
          source_id: string | null
          source_record_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          model?: string | null
          operator?: string | null
          length_feet?: number | null
          guests_capacity?: number | null
          cabins?: number | null
          crew?: number | null
          departure_marina?: string | null
          duration_hours?: number | null
          route?: string | null
          catering_included?: boolean | null
          water_toys?: string[] | null
          price_per_hour?: number | null
          price_per_day?: number | null
          currency?: string
          availability_status?: string | null
          license_number?: string | null
          verified?: boolean
          contact_email?: string | null
          contact_phone?: string | null
          website?: string | null
          source_id?: string | null
          source_record_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          model?: string | null
          operator?: string | null
          length_feet?: number | null
          guests_capacity?: number | null
          cabins?: number | null
          crew?: number | null
          departure_marina?: string | null
          duration_hours?: number | null
          route?: string | null
          catering_included?: boolean | null
          water_toys?: string[] | null
          price_per_hour?: number | null
          price_per_day?: number | null
          currency?: string
          availability_status?: string | null
          license_number?: string | null
          verified?: boolean
          contact_email?: string | null
          contact_phone?: string | null
          website?: string | null
          source_id?: string | null
          source_record_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      restaurants: {
        Row: {
          id: string
          name: string
          cuisine_type: string[] | null
          location: string
          community: string | null
          price_level: string | null
          fine_dining: boolean
          michelin_stars: number | null
          rooftop: boolean
          waterfront: boolean
          beach: boolean
          brunch_available: boolean
          steak_specialist: boolean
          japanese_specialist: boolean
          arabic_specialist: boolean
          italian_specialist: boolean
          nightlife_venue: boolean
          club: boolean
          lounge: boolean
          live_music: boolean
          dj: boolean
          vip_available: boolean
          official_website: string | null
          contact_phone: string | null
          reservations_url: string | null
          average_price_per_person: number | null
          currency: string
          source_id: string | null
          source_record_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          cuisine_type?: string[] | null
          location: string
          community?: string | null
          price_level?: string | null
          fine_dining?: boolean
          michelin_stars?: number | null
          rooftop?: boolean
          waterfront?: boolean
          beach?: boolean
          brunch_available?: boolean
          steak_specialist?: boolean
          japanese_specialist?: boolean
          arabic_specialist?: boolean
          italian_specialist?: boolean
          nightlife_venue?: boolean
          club?: boolean
          lounge?: boolean
          live_music?: boolean
          dj?: boolean
          vip_available?: boolean
          official_website?: string | null
          contact_phone?: string | null
          reservations_url?: string | null
          average_price_per_person?: number | null
          currency?: string
          source_id?: string | null
          source_record_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          cuisine_type?: string[] | null
          location?: string
          community?: string | null
          price_level?: string | null
          fine_dining?: boolean
          michelin_stars?: number | null
          rooftop?: boolean
          waterfront?: boolean
          beach?: boolean
          brunch_available?: boolean
          steak_specialist?: boolean
          japanese_specialist?: boolean
          arabic_specialist?: boolean
          italian_specialist?: boolean
          nightlife_venue?: boolean
          club?: boolean
          lounge?: boolean
          live_music?: boolean
          dj?: boolean
          vip_available?: boolean
          official_website?: string | null
          contact_phone?: string | null
          reservations_url?: string | null
          average_price_per_person?: number | null
          currency?: string
          source_id?: string | null
          source_record_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      hotels: {
        Row: {
          id: string
          name: string
          location: string
          community: string | null
          category: string | null
          star_rating: number | null
          rooms_count: number | null
          amenities: string[] | null
          official_website: string | null
          booking_url: string | null
          contact_phone: string | null
          average_price_per_night: number | null
          currency: string
          source_id: string | null
          source_record_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          location: string
          community?: string | null
          category?: string | null
          star_rating?: number | null
          rooms_count?: number | null
          amenities?: string[] | null
          official_website?: string | null
          booking_url?: string | null
          contact_phone?: string | null
          average_price_per_night?: number | null
          currency?: string
          source_id?: string | null
          source_record_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          location?: string
          community?: string | null
          category?: string | null
          star_rating?: number | null
          rooms_count?: number | null
          amenities?: string[] | null
          official_website?: string | null
          booking_url?: string | null
          contact_phone?: string | null
          average_price_per_night?: number | null
          currency?: string
          source_id?: string | null
          source_record_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      events: {
        Row: {
          id: string
          name: string
          event_type: string
          venue: string
          location: string
          event_date: string
          event_time: string | null
          end_date: string | null
          organizer: string | null
          description: string | null
          ticket_url: string | null
          official_website: string | null
          source_id: string | null
          source_record_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          event_type: string
          venue: string
          location: string
          event_date: string
          event_time?: string | null
          end_date?: string | null
          organizer?: string | null
          description?: string | null
          ticket_url?: string | null
          official_website?: string | null
          source_id?: string | null
          source_record_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          event_type?: string
          venue?: string
          location?: string
          event_date?: string
          event_time?: string | null
          end_date?: string | null
          organizer?: string | null
          description?: string | null
          ticket_url?: string | null
          official_website?: string | null
          source_id?: string | null
          source_record_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      client_saved_properties: {
        Row: {
          id: string
          user_id: string
          property_id: string
          saved_at: string
          notes: string | null
        }
        Insert: {
          id?: string
          user_id: string
          property_id: string
          saved_at?: string
          notes?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          property_id?: string
          saved_at?: string
          notes?: string | null
        }
      }
      client_saved_searches: {
        Row: {
          id: string
          user_id: string
          search_name: string | null
          search_filters: Json
          alert_enabled: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          search_name?: string | null
          search_filters: Json
          alert_enabled?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          search_name?: string | null
          search_filters?: Json
          alert_enabled?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      viewings: {
        Row: {
          id: string
          user_id: string
          property_id: string
          agent_id: string | null
          requested_date: string
          requested_time: string
          status: string
          notes: string | null
          follow_up_required: boolean
          outcome: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          property_id: string
          agent_id?: string | null
          requested_date: string
          requested_time: string
          status?: string
          notes?: string | null
          follow_up_required?: boolean
          outcome?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          property_id?: string
          agent_id?: string | null
          requested_date?: string
          requested_time?: string
          status?: string
          notes?: string | null
          follow_up_required?: boolean
          outcome?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      leads: {
        Row: {
          id: string
          user_id: string | null
          name: string
          email: string | null
          phone: string | null
          source: string | null
          stage: string
          interested_property_types: string[] | null
          budget_min: number | null
          budget_max: number | null
          preferred_communities: string[] | null
          notes: string | null
          assigned_to: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          name: string
          email?: string | null
          phone?: string | null
          source?: string | null
          stage?: string
          interested_property_types?: string[] | null
          budget_min?: number | null
          budget_max?: number | null
          preferred_communities?: string[] | null
          notes?: string | null
          assigned_to?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          name?: string
          email?: string | null
          phone?: string | null
          source?: string | null
          stage?: string
          interested_property_types?: string[] | null
          budget_min?: number | null
          budget_max?: number | null
          preferred_communities?: string[] | null
          notes?: string | null
          assigned_to?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}